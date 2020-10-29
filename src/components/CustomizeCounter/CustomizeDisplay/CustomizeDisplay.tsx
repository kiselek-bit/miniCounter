import React, {ChangeEvent, useState} from "react";
import s from './CustomizeDisplay.module.css'

type CustomizeDisplayPropsType = {
    minValue: number
    maxValue: number
    setMaxValue: (maxValue: number) => void
    setMinValue: (minValue: number) => void
}

export function CustomizeDisplay(props: CustomizeDisplayPropsType) {


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = e.target.value
        props.setMaxValue(Number(newMaxValue))
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMinValue = e.target.value
        props.setMinValue(Number(newMinValue))
    }

    let finalClassNameMinValue = props.minValue < 0 || props.maxValue < props.minValue
        ? s.error
        : ''

    let finalClassNameMaxValue = props.maxValue < 0 || props.maxValue < props.minValue
        ? s.error
        : ''


    return (
        <div className={s.wrapper}>
            <div className={s.value}>
                <span>min value:</span>
                <input value={props.minValue}
                       type="number"
                       className={finalClassNameMinValue}
                       onChange={changeMinValue}/>
            </div>
            <div className={s.value}>
                <span>max value:</span>
                <input value={props.maxValue}
                       type="number"
                       className={finalClassNameMaxValue}
                       onChange={changeMaxValue}/>
            </div>
        </div>
    )
}