const express = require('express');
const dotenv = require('dotenv');
const mathRoutes = require('./routes/mathRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Use the math routes for API endpoints
app.use('/api', mathRoutes);

// start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
