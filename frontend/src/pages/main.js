import React, { useState } from "react";
import { useSelector } from "react-redux";

import Login from "../components/user/login.component.js";
import PostList from "../components/post/postList.component.js";
import NavBar from "../components/others/navbar.component";

function Main() {
  const user = useSelector(state => state.user);
  const [signUp, setSignUp] = useState(false);

  // switch boolean state when clicked
  const onClick = () => {
    setSignUp(!signUp);
  };

  return (
    <React.Fragment>
      <NavBar onClick={onClick} signUp={signUp} />
      {/* display posts or login page based on the login status */}
      {user.userName ? (
        <PostList />
      ) : (
        <Login message={user.message} signUp={signUp} />
      )}
    </React.Fragment>
  );
}

export default Main;
