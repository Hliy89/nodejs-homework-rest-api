const express = require('express')

const { contacts: ctrl } = require('../controllers')

const router = express.Router()

router.get('/', ctrl.getAll)

router.get('/:contactId', ctrl.getOne)

router.post('/', express.json(), ctrl.add)

router.put('/:contactId', express.json(), ctrl.update)

router.delete('/:contactId', ctrl.del)

module.exports = router
