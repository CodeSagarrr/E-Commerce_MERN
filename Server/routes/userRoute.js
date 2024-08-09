const express = require('express')
const {handleData,handleLogin,handleLogOut,genOtp} = require('../Controller/userController')
const router = express.Router()



router.post('/',handleData)
router.post('/login',handleLogin)
router.get('/',handleLogOut)
router.get('/gmail',genOtp)




module.exports = router;