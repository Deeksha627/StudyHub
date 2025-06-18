const express = require('express');
const router = express.Router();

// Dummy controller function (replace with real logic later)
router.post('/register', (req, res) => {
  const { name, email, password, branch, year } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  // Just return received data for now
  res.status(201).json({
    message: 'User registered successfully!',
    user: { name, email, branch, year }
  });
});

module.exports = router;
