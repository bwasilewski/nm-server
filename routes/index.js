const express = require('express')
const router = express.Router()
const { GetCards } = require('../events/index')


router.get('/', function(req, res, next) {
  GetCards()
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

module.exports = router
