const mongoose = require('mongoose');

const reqqschema = new mongoose.Schema({
Name:String,
Email:String,
request:String
})
let requestt3 = mongoose.model("request3", reqqschema)
module.exports = {requestt3}
