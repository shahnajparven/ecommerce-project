const express = require("express");
const { createProduct, getAllProducts, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");
const { isAuthenticatedUser,authorizeRoles }= require("../middleware/auth");

const router = express.Router();




router.route("/product/new").post(isAuthenticatedUser,createProduct);
router.route("/products").get(isAuthenticatedUser,getAllProducts);
router.route("/product/:id").put(isAuthenticatedUser,updateProduct)
router.route("/product/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct);
router.route("/product/:id").get(getProductDetails);




module.exports = router;