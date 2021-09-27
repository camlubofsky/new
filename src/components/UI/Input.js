import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Spreading the props.input means that anything within the input object gets passed into the Input */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
