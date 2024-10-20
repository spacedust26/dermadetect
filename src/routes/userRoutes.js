const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const router = express.Router();

//only admin can access
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});
//only users can accessS
router.get("/user", verifyToken, authorizeRoles("user"), (req, res) => {
  res.json({ message: "Welcome User" });
});

module.exports = router;