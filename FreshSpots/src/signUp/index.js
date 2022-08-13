const express = require('express');

const bodyParser  = require('body-parser');

const JWT  =  require('jsonwebtoken');

const {signup, loginUser} = require('./controller')

app.use(bodyParser.urlencoded({ extended: false }).json({ type: 'application/*+json' }))

export default express
  .Router()
  .post('/signup',signup)
  .post('/login', loginUser)