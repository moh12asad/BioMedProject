const mongoose = require('mongoose');
const deatschema = new mongoose.Schema({
date:Date,
hours: Number,
aboutmeet:String

})
let test = mongoose.model("voldeat", deatschema)
module.exports = {test}
