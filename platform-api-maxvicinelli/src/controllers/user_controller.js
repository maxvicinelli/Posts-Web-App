/* eslint-disable consistent-return */
import jwt from 'jwt-simple';
import dotenv from 'dotenv';

import User from '../models/user_model';

dotenv.config({ silent: true });

export const signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};

export const signup = (req, res, next) => {
  console.log('starting sign up');
  const { email } = req.body;
  const { password } = req.body;
  const { username } = req.body;

  if (!email || !password || !username) {
    return res.status(422).send('You must provide email and password and username');
  }

  User.findOne({ email }).then((result) => {
    if (result) {
      res.status(423).send({ error: 'user exists' });
    }
    console.log(req.user);
    const user = new User();
    user.email = email;
    user.username = username;
    user.password = password;
    user.save().then((response) => {
      res.json({ token: tokenForUser(response) });
    }).catch((error) => {
      res.status(511).send(error);
    });
  }).catch((error) => {
    res.status(424).send(error);
  });
};

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.AUTH_SECRET);
}
