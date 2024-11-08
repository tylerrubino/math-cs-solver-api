const express = require('express');
const dotenv = require('dotenv');
const mathRoutes = require('./routes/mathRoutes');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable express body parsing middle ware
app.use(express.json());

// Enable CORS for all requests
app.use(cors({ origin: 'http://localhost:3000' }));

// Use the math routes for API endpoints
app.use('/api', mathRoutes);

// start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
