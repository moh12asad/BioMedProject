const mongoose = require('mongoose');

const BloodTypeschema = new mongoose.Schema({
FName:String,
id:String,
amount:Number,
date:Date,
type:String

})
let bt = mongoose.model("bloodtype", BloodTypeschema)
module.exports = {bt}
