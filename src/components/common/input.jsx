import React from "react";

const Input = ({ id, name, placeholder }) => {
  return (
    <React.Fragment>
      <input
        type="text"
        id={id}
        name={name}
        className="form-control"
        placeholder={placeholder}
      />
    </React.Fragment>
  );
};

export default Input;
