const mongoose = require('mongoose');
const DB_URI = process.env.MONGODB_URL || "mongodb+srv://mohamas:1234@cluster0.lzz0ewz.mongodb.net/?retryWrites=true&w=majority";

function connect() {
    return new Promise((resolve, reject) => {

        if (process.env.NODE_ENV === 'DB') {
            const Mockgoose = require('mockgoose').Mockgoose;
            const mockgoose = new Mockgoose(mongoose);

            mockgoose.prepareStorage()
                .then(() => {
                    mongoose.connect(DB_URI, { useNewUrlParser: true })
                        .then((res, err) => {
                            if (err) return reject(err);
                            resolve();
                        })
                })
        } else {
            mongoose.connect(DB_URI, { useNewUrlParser: true })
                .then((res, err) => {
                    if (err) return reject(err);
                    resolve();
                })
        }
    });
}

function close() {
    return mongoose.disconnect();
}

module.exports = { connect, close };