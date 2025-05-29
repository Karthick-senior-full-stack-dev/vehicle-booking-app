'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vehicles', [
      // Hatchback vehicles
      { name: 'Toyota Yaris', vehicleTypeId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Honda Fit', vehicleTypeId: 1, createdAt: new Date(), updatedAt: new Date() },

      // SUV vehicles
      { name: 'Ford Explorer', vehicleTypeId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jeep Cherokee', vehicleTypeId: 2, createdAt: new Date(), updatedAt: new Date() },

      // Sedan vehicles
      { name: 'Toyota Camry', vehicleTypeId: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Honda Accord', vehicleTypeId: 3, createdAt: new Date(), updatedAt: new Date() },

      // Cruiser bike
      { name: 'Harley Davidson', vehicleTypeId: 4, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vehicles', null, {});
  }
};
