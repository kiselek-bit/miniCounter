import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/button/Button";
import {Display} from "./components/Counter/display/Display";
import {Counter} from "./components/Counter/Counter";
import {CustomizeCounter} from "./components/CustomizeCounter/CustomizeCounter";


function App() {

    let [count, setCount] = useState<number>(0)

    const maxValue: number = 5
    const minValue: number = 0

    const incCount = () => {
        if (count <  maxValue) {
            setCount(count + 1)
        }
    }
    const resetCount = () => {
        setCount(minValue)
    }

  return (
    <div className="App">
      <header className="App-header">

          <CustomizeCounter count={count}
                            maxValue={maxValue}
                            installCount={() => alert('want install')}/>

          <Counter count={count}
                   maxValue={maxValue}
                   minValue={minValue}
                   incCount={incCount}
                   resetCount={resetCount}/>


      </header>
    </div>
  );
}

export default App;
