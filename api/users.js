const express = require('express')

const useAuth = require('./useAuth')

const { users: ctrl } = require('../controllers')

const router = express.Router()

router.get('/', ctrl.authorize, ctrl.getUsers)

router.get('/:id', ctrl.authorize, ctrl.validateId, ctrl.getUser)

router.delete('/:id', ctrl.validateId, ctrl.deleteUser)

router.get('/current', useAuth, ctrl.getCurrentUser)

module.exports = router
