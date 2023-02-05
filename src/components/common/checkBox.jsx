import React from "react";

const Checkbox = ({ id, text }) => {
  return (
    <React.Fragment>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id={id}
          style={{ borderRadius: "50%" }}
        />
        <label className="form-check-label" htmlFor={id}>
          {text}
        </label>
      </div>
    </React.Fragment>
  );
};

export default Checkbox;
