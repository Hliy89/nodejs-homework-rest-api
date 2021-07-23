const express = require('express')

const useAuth = require('./useAuth')

const { users: ctrl } = require('../controllers')

const upload = require('../helpers/multer')

const router = express.Router()

router.get('/', ctrl.authorize, ctrl.getUsers)

router.get('/:id', ctrl.authorize, ctrl.validateId, ctrl.getUser)

router.delete('/:id', ctrl.validateId, ctrl.deleteUser)

router.get('/current', useAuth, ctrl.getCurrentUser)

router.patch('/avatar', useAuth, upload.single('avatar'), ctrl.updateAvatar)

module.exports = router
