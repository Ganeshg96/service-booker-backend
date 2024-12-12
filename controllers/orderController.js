const OrderDetails = require('../models/OrderDetails');

const saveOrderDetails = async (req, res) => {
  try {
    const {
      full_name,
      email,
      contact_number,
      service_type,
      cardholder_name,
      card_number,
      expiry_date,
      cvv,
    } = req.body;

    const order = await OrderDetails.create({
      full_name,
      email,
      contact_number,
      service_type,
      cardholder_name,
      card_number,
      expiry_date,
      cvv,
    });

    res.status(200).json({ message: 'Order saved successfully', order });
  } catch (error) {
    console.error('Error saving order details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { saveOrderDetails };
