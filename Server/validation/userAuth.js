const z = require('zod')

const validateUser = z.object({

    username: z.string({required_error:'username are required'})
    .trim()
    .min(3,{message:'username must be at least 3 characters long'})
    .max(20,{message:'username must be at most 20 characters long'}),

    email: z.string({required_error:'email are required'})
    .trim()
    .email({message:'email is not valid'}),


    password: z.string({required_error:'password are required'})
    .trim()
    .min(3,{message:'password must be at least 8 characters long'})
    .max(20,{message:'password must be at most 20 characters long'})


})

const validateLogin = z.object({
    username: z.string({required_error:'username are required'})
    .trim()
    .min(3,{message:'username must be at least 3 characters long'})
    .max(20,{message:'username must be at most 20 characters long'}),

    password: z.string({required_error:'password are required'})
    .trim()
    .min(3,{message:'password must be at least 8 characters long'})
    .max(20,{message:'password must be at most 20 characters long'})
})




module.exports = validateUser,validateLogin;