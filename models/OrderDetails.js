const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OrderDetails = sequelize.define('OrderDetails', {
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  service_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cardholder_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  card_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiry_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cvv: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = OrderDetails;
