import React, {useState} from "react";
import s from './Counter.module.css'
import {Display} from "./display/Display";
import {Button} from "../button/Button";
type CounterPropsType ={
    count: number
    maxValue: number
    minValue: number
    incCount: () => void
    resetCount: () => void
}

export function Counter (props: CounterPropsType) {

    return(
        <div className='counter'>
            <Display count={props.count} maxValue={props.maxValue}/>
            <div className="buttonsBlock">
                <Button title='inc'
                        callback={props.incCount}
                        disabled={props.count === props.maxValue}
                ></Button>
                <Button
                    title='reset'
                    callback={props.resetCount}
                    disabled={props.count === props.minValue}></Button>
            </div>
        </div>
    )
}