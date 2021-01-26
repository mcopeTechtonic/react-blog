const { Category, Post } = require('../models');

module.exports = {
  findAll: (req, res) => {
    Category.findAll({
      include: [Post],
    })
      .then((categories) => res.json(categories))
      .catch((err) => res.status(500).json(err));
  },
  findById: (req, res) => {
    Category.findByPk(req.params.id, {
      include: [Post],
    })
      .then((category) => res.json(category))
      .catch((err) => res.status(500).json(err));
  },
  create: (req, res) => {
    Category.create(req.body)
      .then((category) => res.json(category))
      .catch((err) => res.status(422).json(err));
  },
  update: (req, res) => {
    Category.update(req.body, {
      where: { id: req.params.id },
    })
      .then(() => res.end())
      .catch((err) => res.status(422).json(err));
  },
  delete: (req, res) => {
    Category.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.end())
      .catch((err) => res.status(500).json(err));
  },
};
