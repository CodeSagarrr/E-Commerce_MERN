const express = require('express')
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/userData')
   .then(() => console.log('connected to db'))
   .catch(err => console.log(err));
const path = require('path');
const cloudinary = require('cloudinary').v2;




// routes
const validateUser = require('./validation/userAuth')
const { validate } = require('./middleware/userAuthMW')
const { checkUSerToken } = require('./middleware/checkUserToken');
const {handleData,handleLogin,handleLogOut,genOtp ,handleEmailVer,handleUserOtp} = require('./Controller/userController')
const cookieParser = require('cookie-parser');
const upload = require('./Multer/multer');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

// setting with ejs
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'));

app.route('/user/otpverify').post(handleUserOtp)
app.route('/user/signup').post(validate(validateUser),handleData)
app.route('/user/login').post(handleLogin)
app.route('/user/logout').get(handleLogOut)
app.route('/user/gmail').get(genOtp);
app.route('/user/emailVerify').post(handleEmailVer);

app.use('/user', checkUSerToken, (req, res) => {
   res.send({ user: req.user })
})
// ejs for configure
app.get('/', (req, res) => {
   res.render('index')
})

//cloudinary server
cloudinary.config({
   cloud_name: 'dgsmntpfe',
   api_key: '975586279947331',
   api_secret: '9pL-HEjhlNPdlxpFd5ybNjjgV3g'
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