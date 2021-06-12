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

  return (
    <div className="navbar">
      <div className="navbar_image">
        <Link to="/">
          <img src="/image/AeLogo.png"></img>
        </Link>
      </div>

      <div className="navbar_options">
        <Link className="link">
          <div className="navbar_option">
            <span>About</span>
          </div>
        </Link>

        <Link className="link" to="/explore">
          <div className="navbar_option">
            <span>Explore</span>
          </div>
        </Link>

        {/* <Link className="link " to={!user && "/login"}>
          <div className="navbar_option" onClick={login}>
            <span>{!user ? "" : user.displayName}</span>
            <span className="showLink"> {user ? "logout" : "login"}</span>
          </div>
        </Link> */}
        <a
          className="link"
          href=" https://play.google.com/store?utm_source=apac_med&utm_medium=hasem&utm_content=Apr0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Apr0121-Text_Search_BKWS-BKWS%7cONSEM_kwid_43700058906740777_creativeid_480977735237_device_c&gclid=CjwKCAjwtpGGBhBJEiwAyRZX2igYAYDnn2U8Ruiuvo-uca1nrIqMZ-hdFqUMS70aYolxYZTMfIFSPhoCbdIQAvD_BwE&gclsrc=aw.ds
"
        >
          <div className="navbar_option">
            <p className="navbar_download">Download app</p>
          </div>
        </a>
        <Link className="link " to={!user && "/login"}>
          <div className="navbar_avatar " onClick={login}>
            <Avatar src={user ? user.photoURL : ""}></Avatar>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

{
  /* // <>
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
// </> */
}
