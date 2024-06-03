const express = require('express');
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/users",userController.getAllUsers );
router.delete("/user/id", userController.deleteUser);

module.exports = router;