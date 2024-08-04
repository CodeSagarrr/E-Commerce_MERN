const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken');
const s_key = '$Sagar1234';

async function handleData(req, res) {
    const { username, email, password } = req.body;
    console.log(username, email, password)
    try {
        const user = new userModel({
            username,
            email,
            password
        })
        await user.save()
        res.send({ msg: 'user sign up successfully' })   

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }

}


async function handleLogin(req, res) {
  const { username , password} = req.body;
  console.log(username,password);
  const user = await userModel.findOne({username});
  const token = jwt.sign({username:username,password:user.password},s_key)
  res.cookie('jwtToken', token)
  if(!user) return res.json({msg:'user are not found'})
  res.send({msg:'user are login'})
}


function handleLogOut(req,res){
    const loggedInUser = req.cookies.jwtToken;

    if(loggedInUser){
        res.clearCookie('jwtToken').send({msg:'Thanks to logout'});
    }
   
}



module.exports = {
    handleData,
    handleLogin,
    handleLogOut
}