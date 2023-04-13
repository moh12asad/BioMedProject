const mongoose = require('mongoose');
const volreqschema = new mongoose.Schema({
    Name:String,
    Email:String,
    Phone:Number,
    aboutme:String,
    volunteer:String
})
let volreq= mongoose.model('reqs',volreqschema)
module.exports={volreq}
