import './App.css';
import Button from './components/Button'
import Screen from './components/Screen';
import ClearBtn from './components/ClearBtn';
import { useState } from 'react'
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = (val) => {
    setInput(input + val);
  };

  const clearScreen = () => {
    setInput('');
  };

  const showResult = () => {
    if (input !== '') {
      setInput(evaluate(input));
    }
  };


  return (
    <div className="App">
      <div className="App-container">
        <div className="App-container-row">
          <Screen input={input}/>
        </div>
        <div className="App-container-row">
          <Button action={addInput}>7</Button>
          <Button action={addInput}>8</Button>
          <Button action={addInput}>9</Button>
          <Button action={addInput}>+</Button>
        </div>

        <div className="App-container-row">
          <Button action={addInput}>4</Button>
          <Button action={addInput}>5</Button>
          <Button action={addInput}>6</Button>
          <Button action={addInput}>-</Button>
        </div>

        <div className="App-container-row">
          <Button action={addInput}>1</Button>
          <Button action={addInput}>2</Button>
          <Button action={addInput}>3</Button>
          <Button action={addInput}>*</Button>
        </div>

        <div className="App-container-row">
          <Button action={addInput}>0</Button>
          <Button action={addInput}>.</Button>
          <Button action={showResult}>=</Button>
          <Button action={addInput}>/</Button>
        </div>
        <div className="App-container-row">
          <ClearBtn action={clearScreen}> Clear </ClearBtn>
        </div>

      </div>
    </div>
  );
}

export default App;
