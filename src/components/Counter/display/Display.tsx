import React, {useState} from "react";
import s from './Display.module.css'
type PropsType = {
    count:number
    maxValue: number
}

export function Display (props: PropsType) {

    let finalClassName = props.count === props.maxValue? 'red' : ''

    return(
        <div className={s.wrapper}>
            <span className={finalClassName}>{props.count}</span>
        </div>
    )
}