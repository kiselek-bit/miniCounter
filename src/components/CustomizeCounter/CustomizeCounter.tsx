import React, {useState} from "react";
import s from "./CustomizeCounter.module.css"
import {CustomizeDisplay} from "./CustomizeDisplay/CustomizeDisplay";
import {Button} from '../button/Button';

type CustomizeCounterPropsType = {
    count: number
    onClickSetValue: (maxValue: number, minValue: number) => void
}

export function CustomizeCounter(props: CustomizeCounterPropsType) {

    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(0)

    const setValue = () => {
        props.onClickSetValue(maxValue, minValue)
    }

    const disabledSet = minValue < 0 || maxValue <= minValue || maxValue < 0

    return (
        <div className='counter'>
            <CustomizeDisplay maxValue={maxValue}
                              minValue={minValue}
                              setMaxValue={setMaxValue}
                              setMinValue={setMinValue}/>
            <div className="buttonsBlock">
                <Button title='set'
                        callback={setValue}
                        disabled={disabledSet}
                ></Button>
            </div>
        </div>
    )
}