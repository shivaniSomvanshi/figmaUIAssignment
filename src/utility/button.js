import React from "react";

function Button(props) {
  return (
    <div>
      <button className={props.styles}>{props.text}</button>
    </div>
  );
}

export default Button;
