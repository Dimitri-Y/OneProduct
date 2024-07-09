const express = require("express");

const router = express.Router();

const ctrlProduct = require("../../controllers/controller");
const checkApiKey = require("../../middlewares/checkAPIkey");
const validateProduct = require("../../middlewares/validateProduct");

router.post("/product", checkApiKey, validateProduct, ctrlProduct.addProduct);

router.get("/products/:categoryId", ctrlProduct.getProductByCategoryId);

router.get("/product/:id", ctrlProduct.getProductById);

router.delete("/product/:id", checkApiKey, ctrlProduct.removeProduct);

router.put(
  "/product/:id",
  checkApiKey,
  validateProduct,
  ctrlProduct.updateProduct
);

router.get("/categories", ctrlProduct.getCategories);

module.exports = router;
