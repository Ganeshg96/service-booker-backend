const Services = require('../models/Service'); // Replace with your actual model

const getServices = async (req, res) => {
  try {
    const service = await Services.findOne(); // Fetch the first service
    if (service) {
      res.status(200).json(service); // Return the single service
    } else {
      res.status(404).json({ message: 'No service found' }); // Handle empty table scenario
    }
  } catch (error) {
    console.error('Error retrieving service:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = { getServices };
