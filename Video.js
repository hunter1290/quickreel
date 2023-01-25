const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Types.ObjectId,
        ref: 'userid'
    },
    projectid: {
        type: mongoose.Types.ObjectId,
        ref: 'projectid'
    },
    name: {
        type: String,
        required: true
    },
    videourl: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Video = mongoose.model('video', VideoSchema);