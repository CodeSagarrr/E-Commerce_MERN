const express = require('express')
const app = express();
const path = require('path');
const cloudinary = require('cloudinary').v2;
const bodyParser = require('body-parser');
const mongoConnect = require('./db/MongoDB')
const cors = require('cors')


// routes
const validateUser = require('./validation/userAuth')
const { validate } = require('./middleware/userAuthMW')
const { checkUserToken } = require('./middleware/checkUserToken.js');
const {handleData,handleLogin,handleLogOut,genOtp ,handleEmailVer,handleUserOtp,handleResetPassword} = require('./Controller/userController')
const cookieParser = require('cookie-parser');
const upload = require('./Multer/multer');
const dotenv = require('dotenv');



 dotenv.config()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors());
mongoConnect(process.env.MONGOCONNECTION || 'mongodb://127.0.0.1/userData')

// setting with ejs
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'));


app.route('/user/signup').post(validate(validateUser),handleData)
app.route('/user/login').post(handleLogin)
app.route('/user/logout').get(handleLogOut)
app.route('/user/gmail').get(genOtp);
app.route('/user/emailVerify').post(handleEmailVer);
app.route('/user/otpverify').post(handleUserOtp);
app.route('/user/resetpassword').post(handleResetPassword);

app.get('/user', checkUserToken, (req, res) => {
   res.json({ user: req.user , message: "Access granted to chat data" })
})



//cloudinary server
cloudinary.config({
   cloud_name: process.env.cloudinary_cloud_name,
   api_key: process.env.cloudinary_api_key,
   api_secret:process.env.cloudinary_api_secret
});
app.post('/upload', upload.single('fileImage'), async (req, res) => {

   const file = req.file.path;
   console.log(file);

   try {
      const cloudImage = await cloudinary.uploader.upload(file, { resource_type: 'auto' });
      console.log(cloudImage.url);
   } catch (error) {
      console.error(error);
   }


   return res.redirect('/')
});



port = process.env.PORT || 8000
app.listen(port, () => console.log(`Start server ${port}`))


//9pL-HEjhlNPdlxpFd5ybNjjgV3g api of cloudinary server