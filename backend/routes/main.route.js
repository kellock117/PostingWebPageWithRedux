import express from "express";

import UserRoute from "./user.route.js";
import PostRoute from "./post.route.js";

const router = express.Router();

// import two routes and combine them together
router.use("/user", UserRoute);
router.use("/post", PostRoute);

export default router;
