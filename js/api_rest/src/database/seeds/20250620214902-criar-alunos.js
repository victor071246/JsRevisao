const { faker } = require('@faker-js/faker'); // você precisa instalar essa lib se ainda não tiver

module.exports = {
  async up(queryInterface) {
    const alunos = [];

    for (let i = 0; i < 10; i++) {
      alunos.push({
        nome: faker.person.firstName(),
        sobrenome: faker.person.lastName(),
        email: faker.internet.email().toLowerCase(),
        idade: faker.number.int({ min: 18, max: 60 }),
        peso: parseFloat(
          faker.number.float({ min: 50, max: 100, precision: 0.1 })
        ),
        altura: parseFloat(
          faker.number.float({ min: 1.5, max: 2.0, precision: 0.01 })
        ),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    await queryInterface.bulkInsert('alunos', alunos, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('alunos', null, {});
  },
};
