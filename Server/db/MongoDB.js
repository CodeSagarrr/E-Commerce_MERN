const mongoose = require('mongoose');


const mongoConnect = (url) =>{
    mongoose.connect(url)
    .then(()=>console.log('connect mongodb', url))
    .catch((err)=>console.log(err))
}

module.exports = mongoConnect;