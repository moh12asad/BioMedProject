const mongoose = require('mongoose');

const proschema = new mongoose.Schema({
pants:Number,
coat:Number,
shirt:Number,
shoes:Number,
chair:Number,
table:Number


})
let pro = mongoose.model("product", proschema)
module.exports = {pro}
