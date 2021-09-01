const router = require('express').Router()
const validateMDS = require('../middlewares/validate')

const { validate } = require('../controllers/billet.controller')

router.get('/:barcode', validate)

module.exports = router