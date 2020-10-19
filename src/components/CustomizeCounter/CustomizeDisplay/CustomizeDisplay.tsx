import React from "react";
import s from './CustomizeDisplay.module.css'

export function CustomizeDisplay () {
    return (
        <div className={s.wrapper}>
            <div className={s.value}>
                <span>max value:</span>
                <input type="number"/>
            </div>
            <div className={s.value}>
                <span>max value:</span>
                <input type="number"/>
            </div>
        </div>
    )
}