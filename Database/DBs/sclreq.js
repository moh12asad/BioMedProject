const mongoose = require('mongoose');

const sclreqschema = new mongoose.Schema({
Name:String,
Email:String,
Phone:Number,
Studyat:String,
Yearofstud:Number,
aboutme:String
})
let sclreq = mongoose.model("sclreq1", sclreqschema)
module.exports = {sclreq}