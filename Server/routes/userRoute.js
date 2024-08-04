const express = require('express')
const {handleData,handleLogin,handleLogOut} = require('../Controller/userController')
const router = express.Router()



router.post('/',handleData)
router.post('/login',handleLogin)
router.get('/',handleLogOut)

module.exports = router;