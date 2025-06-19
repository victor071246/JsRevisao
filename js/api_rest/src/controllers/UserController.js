import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((error) => error.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      console.log('USER ID', req.userId);
      console.log('USER EMAIL', req.userEmail);
      return res.json(users);
    } catch {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).json({ errors: ['ID não enviado'] });

      const user = await User.findByPk(req.params.id);

      if (!user)
        return res.status(400).json({ errors: ['Usuário não existe'] });

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch {
      return res.json(null);
    }
  }

  //Estava removendo informação sensível do index

  async delete(req, res) {
    try {
      if (!req.params.id)
        return res.status(400).json({ errors: ['ID não enviado'] });

      const user = await User.findByPk(req.params.id);

      if (!user)
        return res.status(400).json({ errors: ['Usuário não existe'] });

      await user.destroy();
      return res.json(
        `${user.nome} foi removido com sucesso do banco de dados`
      );
    } catch {
      return res.json(null);
    }
  }
}

export default new UserController();
