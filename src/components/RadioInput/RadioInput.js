import React from 'react';
import "./RadioInput.scss"

const RadioInput = ({id, current, name, value, setValue, children}) => {
  return (
    <label htmlFor={id}>
      {children}
      <input id={id} className="radio-btn" type="radio" value={value} name={name} checked={current === value} onChange={() => setValue(value)}/>
    </label>
  );
};

export default RadioInput;