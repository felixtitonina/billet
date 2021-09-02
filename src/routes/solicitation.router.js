const router = require('express').Router()

const { validate } = require('../controllers/billet.controller')

router.get('/:barcode', validate)

module.exports = router