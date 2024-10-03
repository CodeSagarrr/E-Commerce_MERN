const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs')
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



const handleEmailVer = async (req, res) => {
    const { email } = req.body;
    const userEmailVerify = await userModel.findOne({ email });
    if (!userEmailVerify) {
        return res.json({ msg: 'email not found' })
    } else {
        const OTP = crypto.randomInt(4, 1000000);
        const sentOtp = String(OTP).padStart(6);

        const token = jwt.sign({ email, OTP }, s_key)

        const emailTransporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 587,
            tls: { rejectUnauthorized: false },
            auth: {
                user: 'sv472921@gmail.com',
                pass: 'sdan jocr bfeu okle'
            }
        })
        const mailOption = ({
            from: 'sv472921@gmail.com',
            to: email,
            subject: 'OTP for Email Verification',
            text: `Your OTP is ${sentOtp}`
        })
        emailTransporter.sendMail(mailOption, (error, emailRes) => {
            if (error) {
                console.log(error)
                return res.status(500).json({ msg: 'Error sending email' })
            }
            console.log('Email sent: ', emailRes.response)
        })
        res.cookie('emailToken', token, { httpOnly: true, secure: true })
            .status(200)
            .json({ msg: 'OTP sent successfully' });


    }
};

const handleUserOtp = async (req, res) => {
    const { otp } = req.body;
    const userToken = req.cookies.emailToken;
    if (!userToken) {
        res.status(400).json({ msg: 'inavlid email token' })
    } else {
        const user = jwt.verify(userToken, s_key);
        const userOtp = user.OTP;   
        if (!userOtp) {
            return res.status(401).json({ msg: 'user otp not found' })
        }
        if (userOtp === parseInt(otp)) {
            res.status(200).json({ msg: ' OTP are verified' });
        } else {
            res.status(401).json({ msg: 'invalid user otp' })
        }
    }
};

const handleResetPassword = async (req, res) => {
    const { password } = req.body;
    const hashPass = await bcrypt.hash(password, 10)
    const userToken = req.cookies.emailToken;
    if (!userToken) {
        res.status(400).json({ msg: 'inavlid email token' })
    } else {
        const user = jwt.verify(userToken, s_key);
        const userEmail = user.email;
        console.log(userEmail);
        if (!userEmail) return res.json({ msg: 'user email not verify' })
        const updateUser = await userModel.findOne({ email: userEmail });
        console.log(updateUser)
        if (!updateUser) return res.json({ msg: 'user not found' })
        updateUser.password = hashPass;
        await updateUser.save();
        res.clearCookie('emailToken').status(200).json({ msg: 'password reset successfully' });
    }
}


module.exports = {
    handleData,
    handleLogin,
    handleLogOut,
    genOtp,
    handleEmailVer,
    handleUserOtp,
    handleResetPassword
}