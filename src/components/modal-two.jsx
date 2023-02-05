import React from "react";
import "./modal.css";
import Input from "./common/input";

const ModalTwo = () => {
  return (
    <>
      <div className="title">
        <p>Please specify the interaction period choice</p>
      </div>
      <div className="modal-content">
        <div className="parent">
          <div className="child">Yes </div>
          <div className="child">
            <i className="fa fa-arrow-right"></i>
          </div>
          <div className="child">Keep it on the duration</div>
          <div className="child" style={{ width: "100%" }}>
            {/* <input type="text" className="form-control" /> */}
            <Input id="txt1" name="txt1" />
          </div>
        </div>
        <div className="parent">
          <div className="child">No </div>
          <div className="child">
            <i className="fa fa-arrow-right"></i>
          </div>
          <div className="child">Reapeat after</div>
          <div className="child" style={{ width: "100%" }}>
            <Input id="txt2" name="txt2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalTwo;
