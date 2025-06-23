import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Nome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'E-mail já utilizado',
          },
          validate: {
            isEmail: {
              msg: 'E-mail inválido',
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          isInt: {
            msg: 'A idade precisa ser um número inteiro',
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          isFloat: {
            msg: 'O peso precisa ser um número de ponto flutuante',
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          isFloat: {
            msg: 'A altura precisa ser um número de ponto flutuante',
          },
        },
      },
      {
        sequelize,
        modelName: 'Aluno',
        tableName: 'alunos',
        timestamps: true,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
