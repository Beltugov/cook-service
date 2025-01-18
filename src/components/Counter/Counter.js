import React, {useState} from 'react';


const Counter = ({getCount}) => {
  const [count, setCount] = useState(1)
  getCount(count)
  return (
    <div className="counter" >
      <button onClick={(e) => count > 1 && setCount(count-1)}>-</button>
      {count}
      <button onClick={(e) => count < 99 && setCount(count+1)}>+</button>
    </div>
  );
};

export default Counter;