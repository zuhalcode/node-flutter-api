const Product = require("../models/Product");

exports.index = async (req, res) => {
  Product.find().exec((err, products) => {
    if (err) return res.status(400).json({ err });
    if (products) return res.status(200).json({ products });
  });
};

exports.create = async (req, res) => {
  console.log(req.file);
  const productObj = {
    name: req.body.name.toLowerCase(),
    price: req.body.price,
    desc: req.body.desc,
    image: req.file.path,
  };

  const newProduct = new Product(productObj);
  newProduct.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) return res.status(200).json({ message: "Product created successfully" });
  });
};

exports.sort = async (req, res) => {
  let categorySlug = req.params.category;

  Product.find({ category: categorySlug }, (err, products) => {
    if (err) res.json(err);
    res.json(products);
  });
};

exports.edit = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    Product.findByIdAndUpdate(id, updates).exec((err) => (err ? res.send(err) : res.status(200).json({ message: "Product update successfully" })));
  } catch (err) {
    res.send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;

    Product.findByIdAndDelete(id).exec((err) => (err ? res.send(err) : res.status(200).json({ message: "Product deleted successfully" })));
  } catch (err) {
    res.send(err);
  }
};
