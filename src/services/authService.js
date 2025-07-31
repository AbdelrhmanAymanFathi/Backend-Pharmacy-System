const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

class AuthService {
  async register({ name, email, password, phone }) {
    const existing = await userRepository.findByEmail(email);
    if (existing) throw new Error('Email already in use');

    const hashed = await bcrypt.hash(password, 10);
    const user = await userRepository.create({ name, email, password: hashed, phone });
    return user;
  }

  async login({ email, password }) {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new Error('Invalid credentials');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Invalid credentials');

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
  }
}

module.exports = new AuthService();

