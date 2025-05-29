'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('VehicleTypes', [
      {
        name: 'Hatchback',
        wheels: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SUV',
        wheels: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sedan',
        wheels: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cruiser',
        wheels: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sports',
        wheels: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('VehicleTypes', null, {});
  }
};
