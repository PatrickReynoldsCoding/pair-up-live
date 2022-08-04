const User = require("../models/user");

const ProfileController = {
  Me: async (req, res) => {
    const profile = await User.findOne({ username: req.session.user.username });
    return res.json(profile);
  },

  All: async (req, res) => {
    const allUsers = await User.find();
    return res.json(allUsers);
  },
};

module.exports = ProfileController;
