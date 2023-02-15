import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import userReducer from "./user.js";
import postsReducer from "./posts.js";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["posts"],
  blacklist: ["user"],
};

const userConfig = {
  key: "user",
  storage: storageSession,
  blacklist: ["message"],
};

const rootReducer = combineReducers({
  user: persistReducer(userConfig, userReducer),
  posts: postsReducer,
});

export default persistReducer(persistConfig, rootReducer);
