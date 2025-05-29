const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/bookingController');
const { Vehicle, VehicleType } = require('../models');

// Route to get all vehicle types
router.get('/vehicle-types', async (req, res) => {
  try {
    const wheelFilter = req.query.wheels; // optional filter by wheels (2 or 4)
    const whereClause = wheelFilter ? { wheels: wheelFilter } : {};

    const vehicleTypes = await VehicleType.findAll({ where: whereClause });
    res.json(vehicleTypes);
  } catch (error) {
    console.error('Error fetching vehicle types:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get vehicles by vehicleTypeId
router.get('/vehicles', async (req, res) => {
  try {
    const { typeId } = req.query;
    if (!typeId) {
      return res.status(400).json({ error: 'typeId query param is required' });
    }
    const vehicles = await Vehicle.findAll({
      where: { vehicleTypeId: parseInt(typeId, 10) }
    });
    res.json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to create a booking
router.post('/bookings', bookingController.createBooking);

module.exports = router;
