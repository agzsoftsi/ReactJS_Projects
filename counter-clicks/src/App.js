import Counter from './components/Counter';
import Button from './components/Button';
import './App.css';
import logo from './pictures/logo.png'
import { useState } from 'react'

function App() {

  const [nClick, setnClick] = useState(0); 

  const actionClick = () => {
   setnClick(nClick + 1);
  };

  const actionRestart = () => {
    setnClick(0);
  };

  return (
    <div className="App">
      <img className="App-logo" src={logo} alt=""/>
      <h1>My Counter App</h1>
      <div className="App-container"></div>
      <Counter click={nClick} />
      <Button name="Click" clickBtn={false} action={actionClick}/>
      <Button name="Restart" clickBtn={true} action={actionRestart}/>
    </div>
  );
}

export default App;
