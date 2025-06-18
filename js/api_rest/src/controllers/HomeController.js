import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Victor Felipe',
      sobrenome: 'Dadério',
      email: 'daderiovictorfelipe@gmail.com',
      idade: 22,
      peso: 68,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
