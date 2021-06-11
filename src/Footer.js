import { Button } from "@material-ui/core";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img src="/image/AeLogo.png"></img>
        <p>
          Get all your nearest shops and services at one go through you mobile
          app
        </p>
        <p> Download the app </p>
      </div>
      <div className="footer_right">
        <h2>Subscribe to our newsletter</h2>
        <input type="text" placeholder="please enter"></input>
        <Button>Subscribe</Button>
        <p>Contact us</p>
        <p>help@amravatiexpress.com</p>
      </div>
    </div>
  );
}

export default Footer;
