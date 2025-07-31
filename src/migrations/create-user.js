'use strict';

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('Users', {
      id: {
        type: 'INTEGER',
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: 'VARCHAR(255)', allowNull: false },
      email: { type: 'VARCHAR(255)', allowNull: false, unique: true },
      password: { type: 'VARCHAR(255)', allowNull: false },
      phone: { type: 'VARCHAR(50)', allowNull: false },
      createdAt: { type: 'DATETIME', allowNull: false },
      updatedAt: { type: 'DATETIME', allowNull: false },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('Users');
  },
};
