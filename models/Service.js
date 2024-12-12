const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Service = sequelize.define('Services', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  image_url: {
    type: DataTypes.STRING,
  },
  schedule_date: {
    type: DataTypes.DATE,
  },
  appointment_date: {
    type: DataTypes.DATE,
  },
  price_per_service: {
    type: DataTypes.FLOAT,
  },
  iservice: {
    type: DataTypes.FLOAT,
  },
  tax: {
    type: DataTypes.FLOAT,
  },
  service: {
    type: DataTypes.FLOAT,
  },
  total: {
    type: DataTypes.FLOAT,
  },
}
);

module.exports = Service;
