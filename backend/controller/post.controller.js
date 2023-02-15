import PostModel from "../models/post.model.js";
import checkAuth from "../util/auth.js";

class PostController {
  static async createPost(req, res) {
    try {
      // check authentication
      const user = checkAuth(req);

      const title = req.body.title;
      const body = req.body.body;

      // this contains the message and insertID
      const result = await PostModel.createPost(title, user.userName, body);

      // return the information of the post created
      res.json({
        newPost: {
          postID: result.insertID,
          title: title,
          userName: user.userName,
          body: body,
        },
        message: result.message,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async viewPost(_req, res) {
    try {
      const result = await PostModel.viewPosts();

      res.json({ message: result.message, posts: result.data });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async deletePost(req, res) {
    try {
      // check authentication
      const user = checkAuth(req);

      const postID = req.params.postID;
      const post = await PostModel.findPost(postID);

      // if post exists and userName is equal to the name on the requested post, delete it
      if (post != undefined && post.userName == user.userName) {
        const result = await PostModel.deletePost(postID);
        res.json({ postID: postID, message: result });
      } else res.json({ message: "invalid action" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default PostController;
