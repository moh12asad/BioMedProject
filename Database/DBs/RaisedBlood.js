

const mongoose = require('mongoose');

const RaisedBloodschema = new mongoose.Schema({
    Ap:Number,
    Op:Number,
    Bp:Number,
    ABp:Number,
    Am:Number,
    Om:Number,
    Bm:Number,
    ABm:Number,
    a:String
});
let rb = mongoose.model("rb", RaisedBloodschema)
module.exports = {rb}
