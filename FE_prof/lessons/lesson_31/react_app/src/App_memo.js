import React, { useMemo, useRef } from 'react';

const App = () => {
  //-----------------------------useRef----------------------------
  // const myRef = useRef('Hello');
  // console.log(myRef);

  // const showRef = () => {
  //   const inputValue = myRef.current.value;
  //   console.log(inputValue);
  // };
  //-----------------------------useMemo----------------------------

  const addTwoNumber = () => 1 + 2;
  const getSum = useMemo(() => addTwoNumber());

  return (
    <div>
      {/* <input type="text" ref={myRef} />
      <button onClick={showRef}>Click</button> */}
    </div>
  );
};

export default App;
