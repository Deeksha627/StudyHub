const Document = require('../models/documentModel');

const getDocuments = async (req, res) => {
    try {
        const documents = await Document.find();
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const uploadDocument = async (req, res) => {
    const { title, subject, semester, fileUrl } = req.body;

    try {
        const newDoc = new Document({ title, subject, semester, fileUrl });
        await newDoc.save();
        res.status(201).json(newDoc);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getDocuments, uploadDocument };
