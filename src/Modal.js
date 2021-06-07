import react from "react";
import "./Modal.css";

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
              <input type="text" placeholder="Enter you name"></input>
            </div>
            <div className="modal_input">
              <input type="text" placeholder="Enter you name"></input>
            </div>
          </form>
        </div>

        <div className="modal_footer">
          <button onClick={props.onClose}>close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
