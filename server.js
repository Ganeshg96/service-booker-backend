require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', userRoutes);
app.use('/api', servicesRoutes);
app.use('/api', orderRoutes);

// Default Route
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Test DB Connection and Start Server
sequelize
  .sync({ alter: true }) // Adjust tables to match models
  .then(() => {
    console.log('Database sync complete.');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error('Unable to connect to the database:', error));
