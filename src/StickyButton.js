import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Modal from "./Modal";
import "./StickyButton.css";

function StickyButton() {
  const [show, setShow] = useState(false);
  return (
    <div className>
      <Button
        className="sticky_button"
        variant="outlined"
        onClick={() => {
          setShow(true);
        }}
      >
        Contact us
      </Button>
      <Modal
        onClose={() => {
          setShow(false);
        }}
        show={show}
      />
    </div>
  );
}

export default StickyButton;
