import React, { useReducer } from "react";
import "./Input.css";
//always return a new state!
//put a value >> isValid becomes true
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, value: action.val, isValid: true };
    default:
      return state;
  }
};

const Input = props => {
  //the second argument is optional: initianal state
  //dispatch action to the reducer function witch run thruw the state
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false
  });
  const changeHandler = e => {
    dispatch({ type: "CHANGE", val: e.target.value });
  };
  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        row={props.row || 3}
        onChange={changeHandler}
        value={inputState.value}
      />
    );
  return (
    <div className={`form-control ${!inputState.isvalid && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element} {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
