const express = require("express");
const Product = require("../models/product.model");

const router = express.Router();
const {
  getProducts,
  getProduct,
  createtProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post('/', createtProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)

module.exports = router