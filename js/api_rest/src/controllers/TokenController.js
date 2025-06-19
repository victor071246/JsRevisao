import User from '../models/User';
import jwt from 'jsonwebtoken';

class TokenController {
  async store(req, res) {
    const { email, password } = req.body;

    if (!email) return res.status(401).json('Email não enviado');
    if (!password) return res.status(401).json('Senha não enviada');
    if (!password && !email)
      return res.status(401).json('Email e senha não enviados');

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json('Usuário não existe');

    if (!(await user.passwordIsValid(password)))
      return res.status(401).json('Senha invalida');

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
