const express = require('express')
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/userData')
.then(()=>console.log('connected to db'))
.catch(err=>console.log(err));



// routes
const router = require('./routes/userRoute')
const validateUser= require('./validation/userAuth')
const {validate} = require('./middleware/userAuthMW')
const {checkUSerToken} = require('./middleware/checkUserToken');
const cookieParser = require('cookie-parser');



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.use('/user/signup',validate(validateUser), router)
app.use('/user/',router)
app.use('/user/logout',router)

app.use('/user',checkUSerToken,(req,res)=>{
   res.send({user:req.user})
})




port = process.env.PORT || 8000
app.listen(port,()=>console.log(`Start server ${port}`))