const express = require('express')
const useAuth = require('./useAuth')

const { users: ctrl } = require('../controllers')

const router = express.Router()

router.post('/register', express.json(), ctrl.createUser)

router.post('/login', express.json(), ctrl.login)

router.post('/logout', useAuth, ctrl.logout)

// router.get('/verify/:token', ctrl.verifyUser)

module.exports = router
