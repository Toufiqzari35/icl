const router = require('express').Router()

const playerController = require('../controllers/player')
const teamController = require('../controllers/team')
const accountController = require('../controllers/account')
const configController = require('../controllers/config')

// GET players
router.get('/player', playerController.getAllPlayers)

// GET playerinfo
router.get('/player/:playerId', playerController.getPlayerInfo)

// GET teams
router.get('/team', teamController.getAllTeams)

// GET team
router.get('/team/:teamId', teamController.getTeamInfo)

// GET teamowners
router.get('/owner', teamController.getAllOwners)

// GET teamowner
router.get('/owner/:ownerId', teamController.getOwnerById)

// GET accounts
router.get('/account', accountController.getAllAccounts)

// GET account by ID
router.get('/account/:accountId', accountController.getAccountById)

// GET configurations
router.get('/config', configController.getConfigurations)

// get player data csv
router.get('/playerdata', playerController.downloadPlayerDataCsv)

module.exports = router
