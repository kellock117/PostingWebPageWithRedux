import db from "./db.js";

class UserModel {
  // user name duplication
  // if user name does not exist, return undefined
  static async findUser(userName) {
    try {
      const [data] = await db.query(
        `
      SELECT *
      FROM USER 
      WHERE userName = ?`,
        [userName]
      );

      return data[0];
    } catch (err) {
      console.log(`Unable to connect to MySQL: ${err.message}`);
    }
  }

  // Create the user with user name and password parameters
  static async createUser(userName, password) {
    try {
      await db.query(
        `
      INSERT INTO USER(userName, password) VALUES (?, ?)
      `,
        [userName, password]
      );

      return { userName: userName, password: password };
    } catch (err) {
      console.log(`Unable to connect to MySQL: ${err.message}`);
    }
  }
}

export default UserModel;
