import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use(req => {
  if (localStorage.getItem(process.env.REACT_APP_KEY)) {
    req.headers.authorization = `Bearer ${localStorage.getItem(
      process.env.REACT_APP_KEY
    )}`;
  }

  return req;
});

export const createUser = formData => API.post("/user/createUser", formData);
export const login = formData => API.post("/user/login", formData);
export const createPost = newPost => API.post("/post/createPost", newPost);
export const fetchPosts = () => API.get("/post/viewPosts");
export const deletePost = postID => API.delete(`/post/deletePost/${postID}`);
