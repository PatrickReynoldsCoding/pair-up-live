const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const ProjectController = require("../controllers/projects")

router.get("/getallprojects", ProjectController.All);
router.get("/getallmyprojects/", auth, ProjectController.AllById);
router.get("/getprojectbyid/:projectid", ProjectController.GetOneById);

router.patch("/joinproject/:projectid", auth, ProjectController.Join);


router.post("/createproject", auth, ProjectController.Create);

module.exports = router;