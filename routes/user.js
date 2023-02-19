const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const UserController = require("../controllers/user");

router.get("/new", UserController.New);
router.post("/", UserController.Create);
router.get("/getfriends", auth, UserController.GetFriends);

module.exports = router;
