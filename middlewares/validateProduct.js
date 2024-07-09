const validateProduct = (req, res, next) => {
  const { name, description, price, imageUrl, categoryId, stock } = req.body;
  if (!name || !description || !price || !imageUrl || !categoryId || !stock) {
    return res.status(400).json({
      error: `All fields are required ${!name ? "name," : ""} ${
        !description ? "description," : ""
      } ${!price ? "price," : ""} ${!imageUrl ? "imageUrl," : ""} ${
        !categoryId ? "categoryId," : ""
      } ${!stock ? "stock" : ""}`,
    });
  }
  next();
};

module.exports = validateProduct;
