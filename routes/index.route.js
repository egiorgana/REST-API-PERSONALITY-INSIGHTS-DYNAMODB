const router = require('express').Router()
const { getData } = require('../controllers/index.controller')

router.post('/profile', getData)

module.exports = router