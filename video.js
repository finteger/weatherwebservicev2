const mongoose = require('mongoose');


const videoSchema = new mongoose.Schema({
    name: String,
    desc: String,
    vid:
    {
        data: Buffer,
        contentType: String
    }
})


module.exports = mongoose.model('Video', videoSchema);