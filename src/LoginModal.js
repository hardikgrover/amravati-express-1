import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./LoginModal.css";
import { useStateValue } from "./StateProvider";

function LoginModal() {
  const [show, setShow] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  const handleClick = () => {
    setShow(show == true ? false : true);
  };
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="login_avatar">
      <Avatar onClick={handleClick} src={user?.photoURL}></Avatar>

      {show ? (
        <div className="login_modalShow">
          <Avatar className="loginModal_avatar" src={user?.photoURL}></Avatar>
          <span className="loginModal_username">
            {user ? user.displayName : user}
          </span>
          <p className="loginModal_gmail">{user ? user.email : ""}</p>

          <Link className="link" to={!user && "/login"}>
            <Button className="loginModal_Button" onClick={login}>
              {user ? "Sign out" : "Sign in"}
            </Button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default LoginModal;
