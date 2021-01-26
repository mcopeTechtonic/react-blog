const { Op } = require('sequelize')
const { Category, Post } = require('../models');

module.exports = {
  findAll: (req, res) => {
    Post.findAll({
      include: [Category],
      where: req.query,
    })
      .then((posts) => res.json(posts))
      .catch((err) => res.status(500).json(err));
  },
  search: (req, res) => {
    // this line pulls the search term from the request url; ie '?query=searchTermHere'
    const { query } = req.query;
    Post.findAll({
      include: [Category],
      where: {
        // then, we use the Sequelize 'or' and 'substring' operators to query for the search term specified as a substring inside two different columns
        [Op.or]: [{ title: { [Op.substring]: query } }, { text: { [Op.substring]: query } }]
      },
    })
      .then((posts) => res.json(posts))
      .catch((err) => res.status(500).json(err));
  },
  findById: (req, res) => {
    Post.findByPk(req.params.id, {
      include: [Category],
    })
      .then((post) => res.json(post))
      .catch((err) => res.status(500).json(err));
  },
  create: (req, res) => {
    Post.create(req.body)
      .then(() => res.end())
      .catch((err) => res.status(422).json(err));
  },
  update: (req, res) => {
    console.log(req.body);
    Post.update(req.body, {
      where: { id: req.params.id },
    })
      .then(() => res.end())
      .catch((err) => res.status(422).json(err));
  },
  delete: (req, res) => {
    Post.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.end())
      .catch((err) => res.status(500).json(err));
  },
};
