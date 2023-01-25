const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Types.ObjectId,
        ref: 'userid'
    },
    name: {
        type: String,
        required: true
    },
    videos: [
        {
            videoid: {
                type: mongoose.Types.ObjectId,
                ref: 'videoid'
            },
            trimstart: {
                type: String,
                default: '00:00:00'
            },
            trimend: {
                type: String,
                default: '00:00:00'
            }
        }
    ],
    resulturl: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Project = mongoose.model('project', ProjectSchema);
