import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['É necessário fazer login'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user)
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });

    req.userID = id;
    req.userEmail = email;
    return next();
  } catch {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};

//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20iLCJpYXQiOjE3NTAyOTc2ODIsImV4cCI6MTc1MDkwMjQ4Mn0.fxJ0qmY0hB14Wa68OS_IsBJOh1U8dRiMM26I8R8H-xU
