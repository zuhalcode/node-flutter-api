const slugify = require("slugify");
const Category = require("../models/Category");

exports.index = async (req, res) => {
  Category.find().exec((err, categories) => {
    if (err) return res.status(400).json({ err });
    if (categories) return res.status(200).json({ categories });
  });
};

exports.create = async (req, res) => {
  const categoryObj = {
    name: req.body.name.toLowerCase(),
    slug: slugify(req.body.name.toLowerCase()),
  };

  if (req.body.parentId) categoryObj.parentId = req.body.parentId;

  const newCategory = new Category(categoryObj);
  newCategory.save((error, category) => {
    if (error) return res.status(400).json({ error });
    if (category) return res.status(200).json({ category });
  });
};

exports.show = async (req, res) => {
  res.json("show category function");
};
