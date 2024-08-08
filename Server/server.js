const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://127.0.0.1:27017/userData')
.then(()=>console.log('connected to db'))
.catch(err=>console.log(err));



// routes
const userRouter = require('./routes/userRoute')
const validateUser= require('./validation/userAuth')
const {validate} = require('./middleware/userAuthMW')
const {checkUSerToken} = require('./middleware/checkUserToken');
const cookieParser = require('cookie-parser');



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(bodyParser.json());


app.use('/user/signup',validate(validateUser), userRouter)
app.use('/user/',userRouter)
app.use('/user/logout',userRouter)
app.use('/user/', userRouter)

// app.use('/user',checkUSerToken,(req,res)=>{
//    res.send({user:req.user})
 
// })
app.get('/',(req,res)=>{
   res.send('hello world')
})




port = process.env.PORT || 8000
app.listen(port,()=>console.log(`Start server ${port}`))