const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const AuthController = {
  Login: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          errors: [{ msg: 'Invalid Credentials. Please try again.' }],
        });
      }

      // Checks the password that was entered with the bcrypt password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          errors: [{ msg: 'Invalid Credentials. Please try again.' }],
        });
      }

      payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        'secretWebToken',
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },
};

module.exports = AuthController;
