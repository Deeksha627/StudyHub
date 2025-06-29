const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const Document = require('../models/Document');

// POST: Upload a document
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const newDoc = new Document({
      title: req.body.title,
      semester: req.body.semester,
      fileUrl: req.file.filename,
      branch: req.body.branch,
    });

    await newDoc.save();
    res.status(201).json({ message: 'Document uploaded successfully', document: newDoc });
  } catch (err) {
    console.error('Upload Error:', err);
    res.status(500).json({ message: 'Error uploading document' });
  }
});
router.get('/', async (req, res) => {
  try {
    const docs = await Document.find(); // or use filters like `find({ type: 'notes' })`
    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch documents' });
  }
});
// GET: List all documents
router.get('/', async (req, res) => {
  const docs = await Document.find().populate('uploadedBy');
  res.json(docs);
});

module.exports = router;
