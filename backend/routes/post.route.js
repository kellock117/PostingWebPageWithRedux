import express from "express";

import PostController from "../controller/post.controller.js";

const router = express.Router();

// create the post
router.post("/createPost", PostController.createPost);
// view the post
router.get("/viewPosts", PostController.viewPost);
// delete the post
router.delete("/deletePost/:postID", PostController.deletePost);

export default router;
