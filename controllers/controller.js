const ctrlShell = require("./ctrlShell");
const Product = require("../models/Product");
const Category = require("../models/Category");

const addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
  res.status(201).json(product);
};
const getProductByCategoryId = async (req, res) => {
  const products = await Product.findAll({
    where: { categoryId: req.params.categoryId },
    attributes: ["name", "imageUrl", "price"],
  });
  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) {
    res.status(404).json({ error: "Product not found" });
  }
  res.status(200).json(product);
};

const updateProduct = async (req, res, next) => {
  const product = await Product.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  if (!product) {
    res.status(404).json({ error: "Product not found" });
  }
  res.status(201).json(product);
};

const removeProduct = async (req, res, next) => {
  const product = await Product.destroy({ where: { id: req.params.id } });
  if (!product) {
    res.status(404).json({ error: "Product not found" });
  }
  res
    .status(204)
    .json({ message: `Product with id ${req.params.id} deleted successfully` });
};

const getCategories = async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
};

module.exports = {
  addProduct: ctrlShell(addProduct),
  getProductByCategoryId: ctrlShell(getProductByCategoryId),
  getProductById: ctrlShell(getProductById),
  removeProduct: ctrlShell(removeProduct),
  updateProduct: ctrlShell(updateProduct),
  getCategories: ctrlShell(getCategories),
};
