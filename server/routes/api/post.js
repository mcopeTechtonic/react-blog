const router = require('express').Router();
const postController = require('../../controllers/postController');

// ! if full url matches with '/api/posts/'
router.route('/')
  .get(postController.findAll)
  .post(postController.create);

// ! if full url matches with '/api/posts/search'
// adding a new route to handle searches; the controller method for this route expects a '?query=searchTermHere' and uses the search term provided to filter 
// table results (technically this wouldn't have to be a separate route, but I set it up this way because I wanted the postController.findAll method referenced 
// within the block above to handle queries on the CategoryId column in particular)
router.route('/search')
  .get(postController.search);

// ! if full url matches with '/api/posts/:id'
router.route('/:id')
  .get(postController.findById)
  .put(postController.update)
  .delete(postController.delete);

module.exports = router;
