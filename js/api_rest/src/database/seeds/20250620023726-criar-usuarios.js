module.exports = {
  async up(queryInterface, Sequelize) => queryInterface.bulkInsert('users' [{
    name: 'John Doe',
    isBetaMember: false
  }], {},)


  async down(queryInterface, Sequelize) {}
};
