const blogController = require('../Controller/blogController');
const express = require('express');
const router = express.Router();
// const verifyToken = require('../middleware/verifyToken');

//* protecting the routes
// getting all the blogs

router.get('/', blogController.get_all_blogs)

// getting a particular blog
router.get('/:id', blogController.get_blog_by_id)


//* POST request
router.use(express.json());
router.post('/', blogController.post_blog)

//* DELETE request
router.delete('/:id', blogController.delete_blog);


module.exports = router;