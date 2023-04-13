const mongoose = require('mongoose');
const messageschema = new mongoose.Schema({
    Name: String,
    Email: String,
    Message: String

})
let message = mongoose.model("message", messageschema)
module.exports = { message }