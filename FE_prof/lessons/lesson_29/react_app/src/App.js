import { useState } from 'react';
import './App.css';
import { Count } from './components/Count';

function App() {
  const [num, setNum] = useState(0);
  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    setNum(num - 1);
  };
  return (
    <div className="container">
      {/* <p>{num}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button> */}
    </div>
  );
}
<Count num={num} plus={plus} minus={minus} />

export default App;
