import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar_image" src="/image/AeLogo.png"></img>
      <div className="navbar_options">
        <p>About</p>
        <p>Register Yourself</p>
        <p>Login</p>
        <div className="navbar_download">Download the app</div>
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
