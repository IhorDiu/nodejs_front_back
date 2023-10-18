/**http://localhost:60000/api/v1/posts
 * /api/v1/posts
 * 1. Read posts
 * 2. Add post
 * 3. Get post
 * 4. Update post
 * 5. Delete post
 */

const express = require("express");
const postsRoutes = express.Router();
const postController = require("../controllers/PostsController");

postsRoutes.get("/posts", postController.getAll);
postsRoutes.post(
  "/posts",
  (req, res, next) => {
    console.log("JOI");
    next();
  },
  postController.add
);
postsRoutes.get("/posts/:id", postController.getOne);
postsRoutes.patch("/posts/:id", postController.update);
postsRoutes.delete("/posts/:id", postController.remove);

console.log("Hello World");

module.exports = postsRoutes;
