import React from "react";

const GoodButton = () => {
  return (
    <button class="fancy-button"
      onClick={() => alert('Good job!')}
    >
      Click me!
    </button>
  )
};
export default GoodButton;