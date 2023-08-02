import './App.css';
import { useState } from 'react';
import Counter from './components/counter'

function App() {


    const [count, setCount] = useState(0);
  
    const addToCount = () => {
      setCount((prevCount) => prevCount + 1);
    };
  
    const subtractFromCount = () => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    };
  
    const resetCount = () => {
      setCount(0);
    };


  return (
      <>
      <Counter count={count} addToCount={addToCount} subtractFromCount={subtractFromCount} resetCount={resetCount}  />
      </>
  );
}
export default App
