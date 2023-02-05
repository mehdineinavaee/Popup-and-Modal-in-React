import React from "react";
import "./modal.css";
import image from "../images/air.png";

const ModalThree = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        Your interaction has been send successfully!
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <img src={image} style={{ width: "auto", height: "200px" }} />
      </div>
    </>
  );
};

export default ModalThree;
