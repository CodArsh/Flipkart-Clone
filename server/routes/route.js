import express from "express";

import {
  getProducts_controller,
  getProductDetails_controller,
} from "../controller/products.controller.js";
import {
  userSignup_Controller,
  userLogin_Controller,
} from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", userSignup_Controller);
router.post("/login", userLogin_Controller);
router.get("/products", getProducts_controller);
router.get("/product/:id", getProductDetails_controller);
export default router;
