import db from "./db.js";

class PostModel {
  // return the post information found by post ID
  // if the post does not exist, return undefined
  static async findPost(postID) {
    try {
      const [data] = await db.query(
        `
      SELECT userName
      FROM POST
      WHERE postID = ?
      `,
        [postID]
      );

      return data[0];
    } catch (err) {
      console.log(`Unable to connect to MySQL: ${err}`);
    }
  }

  // create a new post with the parameters - title, user name and body
  static async createPost(title, userName, body) {
    try {
      const [data] = await db.query(
        `
        INSERT INTO POST(title, userName, body) VALUES (?, ?, ?)
        `,
        [title, userName, body]
      );

      return { insertID: data.insertId, message: "post created successfully" };
    } catch (err) {
      console.log(`Unable to connect to MySQL: ${err}`);
    }
  }

  static async viewPosts() {
    try {
      const [data] = await db.query(
        `
          SELECT *
          FROM POST
          `
      );

      return { data: data, message: "fetch post successful" };
    } catch (err) {
      console.log(`Unable to connect to MySQL: ${err}`);
    }
  }

  static async deletePost(postID) {
    try {
      await db.query(
        `
        DELETE FROM POST WHERE postID = ?`,
        [postID]
      );

      return "post deleted successfully";
    } catch (err) {
      console.log(`Unable to connect to MySQL: ${err.message}`);
    }
  }
}

export default PostModel;
