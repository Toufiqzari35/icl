require('dotenv').config()
// import modules
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const cors = require('cors')

// import files
const entityRoutes = require('./routes/entities')
const auctionRoutes = require('./routes/auction')
const adminRoutes = require('./routes/admin')
const authRoutes = require('./routes/auth')
const authMiddleware = require('./middlewares/auth')

// initialize objects
const app = express()
const multerStorage = multer.diskStorage({
  filename: (req, file, cb) => {
    switch (file.fieldname) {
      case 'image':
        cb(
          null,
          new Date().getTime() +
            '-' +
            file.originalname.replace(/[^a-z0-9.]/gi, '_').toLowerCase()
        )
        break
      case 'zip':
        cb(null, 'images.zip')
        break
      default:
        cb(null, file.originalname)
    }
  },
  destination: (req, file, cb) => {
    switch (file.fieldname) {
      case 'image':
        fs.mkdirSync('static/images', { recursive: true })
        cb(null, './static/images')
        break
      case 'csv':
        fs.mkdirSync('static/csv', { recursive: true })
        cb(null, './static/csv')
        break
      case 'zip':
        fs.mkdirSync('static/zip', { recursive: true })
        cb(null, './static/zip')
        break
      default:
        fs.mkdirSync('static/others', { recursive: true })
        cb(null, './static/others')
        break
    }
  },
})
const multerMiddleware = multer({
  storage: multerStorage,
  // limits: {
  //   fileSize: (process.env.MAX_IMAGE_SIZE_IN_MB || 150) * 1024 * 1024,
  // },
}).fields([
  { name: 'image', maxCount: 1 },
  { name: 'csv', maxCount: 1 },
  { name: 'zip', maxCount: 1 },
])

// handling cors policy
app.use(cors())
// app.use('/', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', '*')
//   res.header('Access-Control-Allow-Methods', '*')
//   next()
// })

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(authMiddleware.setAuth)

app.use((req, res, next) => {
  multerMiddleware(req, res, (err) => {
    if (err) {
      console.log('Error while storing files using multer storage!\n', err)
      req.multerError = err
      return res.json({
        status: 'error',
        msg: 'Error while storing file using multer',
        err: err,
      })
    }
    next()
  })
})

// serve static files
app.use(express.static(path.join(__dirname, 'frontend-build')))
app.use('/static', express.static(path.join(__dirname, 'static')))

// serve routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/admin', authMiddleware.isAdmin, adminRoutes)
app.use('/api/v1/auction', auctionRoutes)
app.use('/api/v1', entityRoutes)

// serving frontend
app.get('/*', (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, 'frontend-build/index.html'))
})

// handling errors
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: 'error',
    msg: err.message,
  })
})

const PORT = process.env.PORT || 8000
// connect mongoose client then listen to PORT
mongoose.set('strictQuery', true)
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('mongoose client Connected!')
    // updating global configurations
    return require('./config')
      .updateConfigurations()
      .catch((err) => {
        console.log('__error_in_updating_configurations__\n', err)
      })
  })
  .then((configurations) => {
    const server = app.listen(PORT, () => {
      console.log(`server listening to port: ${PORT}`)
    })
    // initialize socket connection and check connection
    const io = require('./socket').init(server)
    io.on('connection', () => {
      console.log('Client connected!')
    })
  })
  .catch((err) => {
    console.log('client_not_connected', err)
  })
