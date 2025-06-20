import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((error) => error.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userID);

      if (!user)
        return res.status(400).json({ errors: ['Usuário não existe'] });

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userID);

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
