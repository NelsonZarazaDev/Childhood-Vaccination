import React from "react";

export default function Button({ text }) {
  return (
    <>
      <button
        type="submit"
        className="w-1/6 h-14 bg-darkBlue rounded-full font-bold text-white text-xl shadow-xl"
      >
        {text}
      </button>
    </>
  );
}
