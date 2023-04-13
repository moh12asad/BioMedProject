const mongoose = require('mongoose');

const Typesschema = new mongoose.Schema({
    type:String,
    amount:Number,
});
let types= mongoose.model("types", Typesschema)
module.exports = {types}