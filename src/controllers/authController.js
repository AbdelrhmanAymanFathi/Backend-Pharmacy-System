const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ message: 'Registered successfully', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { user, token } = await authService.login(req.body);
    res.status(200).json({ message: 'Logged in successfully', token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
