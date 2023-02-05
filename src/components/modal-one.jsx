import React from "react";
import "./modal.css";
import Checkbox from "./common/checkBox";

const ModalOne = () => {
  return (
    <>
      <div className="title">
        <p>Please specify the period below</p>
      </div>
      <div className="modal-content">
        <Checkbox id="checkBoxOne" text="Interact by action" />
        <br />
        <Checkbox
          id="checkBoxTwo"
          text="Keep the interaction for a certain time"
        />
        <br />
        <Checkbox id="checkBoxThree" text="Send one time" />
      </div>
    </>
  );
};

export default ModalOne;
