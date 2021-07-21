const express = require('express')

const useAuth = require('./useAuth')

const { contacts: ctrl } = require('../controllers')

const router = express.Router()

router.get('/', useAuth, ctrl.getAll)

router.get('/:contactId', useAuth, ctrl.getOne)

router.post('/', express.json(), useAuth, ctrl.add)

router.put('/:contactId', express.json(), useAuth, ctrl.update)

router.patch('/:contactId/favorite', express.json(), useAuth, ctrl.updateStatus)

router.delete('/:contactId', useAuth, ctrl.del)

module.exports = router
