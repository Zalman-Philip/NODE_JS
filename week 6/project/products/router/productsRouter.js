const express = require("express");
const router = express.Router();

const {
  getProductById,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductPartly,
  subQuantity,
  addQuantity,
} = require("../controller/productsController");

router.get("/product/:id", getProductById);

router.get("/product", getAllProducts);

router.post("/product", createProduct);

router.delete("/product/:id", deleteProduct);

router.put("/product/:id", updateProduct);

router.patch("/product/addQuantity/:id", addQuantity);

router.patch("/product/reduceQuantity/:id", subQuantity);

router.patch("/product/:id", updateProductPartly);

module.exports = router;
