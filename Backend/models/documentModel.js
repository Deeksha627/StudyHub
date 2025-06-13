const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    title: String,
    subject: String,
    semester: String,
    fileUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Document', documentSchema);
