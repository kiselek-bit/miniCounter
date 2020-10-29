import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/button/Button";
import {Display} from "./components/Counter/display/Display";
import {Counter} from "./components/Counter/Counter";
import {CustomizeCounter} from "./components/CustomizeCounter/CustomizeCounter";


function App() {

    let [count, setCount] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(0)

    const onClickSetValue = (maxValue: number, minValue: number) => {
        setMaxValue(maxValue)
        setMinValue(minValue)
        setCount(minValue)
    }

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
                            onClickSetValue={onClickSetValue}/>

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
