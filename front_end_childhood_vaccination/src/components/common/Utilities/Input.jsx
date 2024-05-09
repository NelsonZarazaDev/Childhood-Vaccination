import React from "react";

export default function Input({estilos,placeholder, type, name, id, value, onChange, state}) {
  return (
    <>
      <input
        className={estilos}
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        disabled = {state}
      />
    </>
  );
}
