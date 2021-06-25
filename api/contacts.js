const express = require('express')

const { contacts: ctrl } = require('../controllers')

const router = express.Router()

router.get('/', ctrl.getAll)

router.get('/:contactId', ctrl.getOne)

// router.post('/', ctrl.add)

// router.put('/:contactId', ctrl.update)

// router.delete('/:contactId', ctrl.del)

module.exports = router
