import React from "react";

export default function InputLogin({placeholder, type, name, id, value, onChange}) {
  return (
    <>
      <input
        className="bg-lightGreen p-3 w-[70%] rounded-lg font-bold"
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
