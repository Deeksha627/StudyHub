const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//const connectDB = require('./config/db'); // <-- Added this
const documentRoutes = require('./routes/documentRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/documents', documentRoutes);

// Connect to MongoDB
// connectDB(); // <-- Added this

const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log('App listening on port 3000!');
    });
});