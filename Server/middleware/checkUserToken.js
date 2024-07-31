const s_key = '$Sagar1234';
const jwt = require('jsonwebtoken')

const checkUSerToken = (req,res,next) =>{
    const checkToken = req.cookies.jwtToken;
    if(!checkToken) return res.json({msg:'user are not login'})

    const verifyToken = jwt.verify(checkToken,s_key);
    if(!verifyToken){
        return res.json({msg:'invalid user'})
    }else{
      req.user = verifyToken;
    }
    next();
    

}

module.exports = {
    checkUSerToken
}