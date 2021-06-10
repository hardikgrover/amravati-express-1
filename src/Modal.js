import react from "react";
import "./Modal.css";
import { Button } from "@material-ui/core";

function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal_content">
        <div className="modal_header">
          <h4 className="modal_title">Register Yourself</h4>
        </div>
        <div className="modal_body">
          <form>
            <div className="modal_input">
              <input type="text" placeholder="Enter you name"></input>
            </div>
            <div className="modal_input">
              <input type="text" placeholder="mobile number"></input>
            </div>
            <div className="modal_input">
              <input type="text" placeholder="Shop name"></input>
            </div>
            <div className="modal_input">
              <input type="text" placeholder="Shop address"></input>
            </div>
          </form>
        </div>

        <div className="modal_footer">
          <Button className="footer_button">Submit</Button>
          <Button
            className="footer_button footer_redButton"
            onClick={props.onClose}
          >
            close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
