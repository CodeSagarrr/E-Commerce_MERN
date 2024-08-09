const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://127.0.0.1:27017/userData')
.then(()=>console.log('connected to db'))
.catch(err=>console.log(err));
const path = require('path');




// routes
const userRouter = require('./routes/userRoute')
const validateUser= require('./validation/userAuth')
const {validate} = require('./middleware/userAuthMW')
const {checkUSerToken} = require('./middleware/checkUserToken');
const cookieParser = require('cookie-parser');
const upload = require('./Multer/multer');



app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use(bodyParser.json());

app.set('view engine', 'ejs')
app.set('views',path.resolve('./views'));


app.use('/user/signup',validate(validateUser), userRouter)
app.use('/user/',userRouter)
app.use('/user/logout',userRouter)
app.use('/user/', userRouter)

app.use('/user',checkUSerToken,(req,res)=>{
   res.send({user:req.user})
})

// ejs for configure
app.get('/',(req,res)=>{
   res.render('index')
})

app.post('/upload', upload.single('fileImage'), (req, res) => {
   console.log(req.body)
  console.log(req.file);

  return res.redirect('/')
});



port = process.env.PORT || 8000
app.listen(port,()=>console.log(`Start server ${port}`))