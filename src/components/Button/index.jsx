import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <button
      className="text-center border rounded-xl p-2 bg-red-600 hover:bg-amber-500 font-bold text-md text-white hover:text-blue-600"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
