const express = require('express')
const {handleData,handleLogin,handleLogOut,genOtp ,handleEmailVer} = require('../Controller/userController')
const router = express.Router()



router.post('/',handleData)
router.post('/login',handleLogin)
router.get('/',handleLogOut)
router.get('/gmail',genOtp)
// forgot password verification routes
router.post('/emailVerify',handleEmailVer);




module.exports = router;