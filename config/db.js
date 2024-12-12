require('dotenv').config(); 

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT
  }
);

sequelize
  .authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch((err) => console.error('Database connection failed:', err));

module.exports = sequelize;
