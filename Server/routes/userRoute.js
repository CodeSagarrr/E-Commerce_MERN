const express = require('express')
const {handleData,handleLogin} = require('../Controller/userController')
const router = express.Router()



router.post('/',handleData)
router.post('/login',handleLogin)

module.exports = router;