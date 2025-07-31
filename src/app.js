const express = require('express');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Test DB connection and sync models
sequelize.authenticate()
  .then(() => console.log('✅ DB connected'))
  .catch(err => console.error('❌ DB connection error:', err));

sequelize.sync();

module.exports = app;
