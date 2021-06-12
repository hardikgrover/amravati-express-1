import { Avatar, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./Navbar.css";
import { useStateValue } from "./StateProvider";

function Navbar() {
  const [{ user }, dispatch] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  // const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   // Anything in here is fired on component mount.
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     // Anything in here is fired on component unmount.
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const handleScroll = () => {
  //   const currentScrollPos = window.pageYOffset;

  //   setPrevScrollpos(currentScrollPos);
  //   setVisible(prevScrollpos > currentScrollPos);
  // };
  return (
    <div className="navbar">
      <div className="navbar_image">
        <Link to="/">
          <img src="/image/AeLogo.png"></img>
        </Link>
      </div>
      <div className="navbar_options">
        <div className="link">
          <span>About</span>
        </div>
        <div className="link">
          <span>Explore</span>
        </div>

        <Link className="link" to={!user && "/login"}>
          <div className="link" onClick={login}>
            <span>{!user ? "" : user.displayName}</span>
            <span> {user ? "logout" : "login"}</span>
          </div>
        </Link>
        <div className="link">
          <p className="navbar_download">Download app</p>
        </div>

        <MenuItem className="navbar_menu"></MenuItem>
        {/* <Avatar></Avatar> */}
        {/* <Avatar></Avatar> */}
      </div>
    </div>
  );
}

export default Navbar;

// <>
// <div className="container-fluid nav_bg">
//     <div className="row">
//         <div className="col-12">
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <NavLink  exact className="navbar-brand" to="/">
//                         <img src="/image/logo.jpeg" alt="logo" height="50px" width="130px" />
//                     </NavLink>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mb-2 mb-lg-0" style={{marginLeft: "auto"}}>
//                             <li className="nav-item">
//                                 <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">About</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink activeClassName="menu_active" exact className="nav-link" to="/signup">Sign Up</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink activeClassName="menu_active" exact className="nav-link" to="signin">Sign In</NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     </div>
// </div>
// </>
