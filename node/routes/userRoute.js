const express = require("express");
const { createUser,getUser, deleteUser, registerUser, loginUser, logout, updateUserRole, getUserDetails } = require("../controllers/userController");
const { isAuthenticatedUser,authorizeRoles }= require("../middleware/auth");


const router = express.Router();



//router.route("/user/new").post(createUser);
router.route("/register").post(registerUser);
router.route("/admin/users").get(isAuthenticatedUser, getUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
//router.route("/me").get( isAuthenticatedUser,getUserDetails);



router.route("/admin/user/:id").put(isAuthenticatedUser,authorizeRoles("admin"), updateUserRole);
router.route("/admin/user/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
router.route("/admin/user/:id").get( getUserDetails);





module.exports = router;