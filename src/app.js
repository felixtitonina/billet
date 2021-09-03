require('dotenv').config()

const helmet = require('helmet')
const logger = require('morgan');
const express = require('express')
const app = express()

app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '5mb' }))
app.use(logger('dev'));
const boleto = require('./routes/solicitation.router')

app.use('/boleto', boleto)
console.log(__dirname)

module.exports = app


