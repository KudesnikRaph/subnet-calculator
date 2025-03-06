import React from "react";

function Input({ id, placeholder, value, onChange }) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input"
    />
  );
}

export default Input;
