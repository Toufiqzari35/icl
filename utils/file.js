const fs = require('fs')
const path = require('path')
const compressImages = require('compress-images')
const StreamZip = require('node-stream-zip')

const compressImageUtil = (src, dest) => {
  // transform the destination path in required i.e ending with '/'
  if (dest && !dest.endsWith('/')) dest += '/'

  // remove destination file if exists already
  const filename = path.basename(src)
  const destinationFilePath = path.join(dest, filename)
  fs.rmSync(destinationFilePath, { force: true })

  const compression = 60
  return new Promise((resolve, reject) => {
    compressImages(
      src,
      dest,
      {
        compress_force: false,
        statistic: false,
        autoupdate: true,
      },
      false,
      {
        jpg: { engine: 'mozjpeg', command: ['-quality', compression] },
      },
      {
        png: {
          engine: 'pngquant',
          command: ['--quality=' + compression + '-' + compression, '-o'],
        },
      },
      { svg: { engine: 'svgo', command: '--multipass' } },
      {
        gif: {
          engine: 'gifsicle',
          command: ['--colors', '64', '--use-col=web'],
        },
      },
      async function (error, completed, statistic) {
        if (error) reject(error)
        else resolve(completed)
      }
    )
  })
}

const extractZipAndCompress = (zipPath, extractedPath, destinationPath) => {
  // create source and destination folders
  fs.mkdirSync(extractedPath, { recursive: true })
  fs.mkdirSync(destinationPath, { recursive: true })

  var zip = new StreamZip({
    file: zipPath,
    storeEntries: true,
  })

  // zip.on('ready', function () {
  //   console.log('All entries read: ' + zip.entriesCount)
  // })

  zip.on('error', function (err) {
    console.error('__error_while_extracting_zip__', err)
  })

  zip.on('entry', function (entry) {
    if ('/' === entry.name[entry.name.length - 1]) {
      // console.log('[DIR]', entry.name)
      return
    }

    // console.log('[FILE]', entry.name)
    zip.stream(entry.name, function (err, stream) {
      if (err) {
        console.error('__error_while_streaming_zip__', err)
        return
      }

      stream.on('error', function (err) {
        console.log('__error_on_streaming_zip__', err)
        return
      })

      // extract the image file from zip and write to extractedPath
      const extractedFilePath = path.join(extractedPath, entry.name)
      const extractedFileStream = fs.createWriteStream(extractedFilePath)
      stream.pipe(extractedFileStream)

      // compress the extracted file and save to destination
      extractedFileStream.on('finish', () => {
        compressImageUtil(extractedFilePath, destinationPath)
          .then((result) => {
            if (result) fs.rmSync(extractedFilePath)
            else throw new Error('__could_not_compress_file__')
          })
          .catch((err) => {
            fs.renameSync(
              extractedFilePath,
              path.join(destinationPath, entry.name)
            )
          })
          .catch((err) => {
            console.log('__error_while_moving_extracted_image__\n', err)
          })
      })
    })
  })
}

module.exports = { compressImageUtil, extractZipAndCompress }
