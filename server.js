const app = require("./app.js");
const db = require('./Database/database.js');
const port = process.env.PORT || 3000;


db.connect();


const listner = app.listen(port, () => {
    console.log("Starting Server port 3000");
});