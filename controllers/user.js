const User = require("../models/user");
const Project = require('../models/projects');
const bcrypt = require("bcrypt");

const UserController = {
  New: (req, res) => {
    res.render("users/new", {});
  },

  Create: async (req, res) => {
    if (!(req.body.email && req.body.password)) {
      return res.status(400).send({ error: "Data not formatted properly" });
    }

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,

      fname: req.body.fname,
      lname: req.body.lname,
      skill: req.body.skill,
      languages: req.body.languages,
      postcode: req.body.postcode,
    });
    console.log(user);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    console.log(user);

    await user.save().then((doc) => res.status(201).json(user));
  },
  GetFriends: (req, res) => {
    signedInUserId = req.user.id
    console.log("hello")
    console.log(signedInUserId);
      
    User.find({
      'friends': { $in: [signedInUserId]}
  },).exec((err, myfriends) => {
            if (err) {
        throw err;  
        }
        return res.json(myfriends);
        });

  }
  
}

module.exports = UserController;
