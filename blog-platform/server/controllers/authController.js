const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (username !== 'HoboFrog' || password !== 'HoboFrog101!') {
    return res.status(401).send('Invalid credentials');
  }
  const token = jwt.sign({ id: 'admin' }, process.env.JWT_SECRET);
  res.cookie('token', token, { httpOnly: true }).send('Logged in');
};
