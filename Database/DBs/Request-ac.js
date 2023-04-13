const mongoose = require('mongoose');

const proschema = new mongoose.Schema({
Name:String,
Email:String,
request:String
})
let Request = mongoose.model("Request1", proschema)
module.exports = {Request}
