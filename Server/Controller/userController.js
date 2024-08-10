const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt')
const crypto = require('crypto');
const s_key = '$Sagar1234';






async function handleData(req, res) {
    const { username, email, password } = req.body;
    console.log(username, email, password)
    salt = 10;
    const hasPass = await bcrypt.hash(password, salt);
    try {
        const user = new userModel({
            username,
            email,
            password: hasPass,

        })
        await user.save()
        res.send({ msg: 'user sign up successfully' })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }

}


async function handleLogin(req, res) {
    const { password, username } = req.body;
    console.log(username, password);
    const user = await userModel.findOne({ username });
    if (!user) return res.json({ msg: 'username not found' })
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ msg: 'password incorrect' })
    const token = jwt.sign({ password: password, username: username }, s_key)
    res.cookie('jwtToken', token)
    res.send({ msg: 'user are login' })
}


function handleLogOut(req, res) {
    const loggedInUser = req.cookies.jwtToken;

    if (loggedInUser) {
        res.clearCookie('jwtToken').send({ msg: 'user are logout' });
    }

}

const genOtp = (req, res) => {
    const cryptoOtp = crypto.randomInt(4, 100000); //genrate otp for secure authentication
    const otp = String(cryptoOtp).padStart(6, '5');
    console.log(otp)
    const emailTransporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        port: 587,
        tls: { rejectUnauthorized: false },
        auth: {
            user: 'sv472921@gmail.com',
            pass: 'sdan jocr bfeu okle'
        }
    })
    const mailOptions = {
        from: 'sv472921@gmail.com',
        to: 'sagarv0987@gmail.com',
        subject: 'OTP for Signup',
        text: `Your OTP is ${otp}`
    }
    emailTransporter.sendMail(mailOptions, (error, emailInfo) => {
        if (error) {
            console.log(error)
            return res.status(500).json({ msg: 'Error sending email' })
        }
        console.log('Email sent: ', emailInfo.response)
        res.send({ msg: 'Email sent successfully' })
    })
}





module.exports = {
    handleData,
    handleLogin,
    handleLogOut,
    genOtp,
}