import React, {useState} from "react";
import s from './Button.module.css'

type PropsType = {
    title: string
    callback: () => void
    disabled: boolean
}

export function Button(props: PropsType) {

    return (
        <div className={s.button}>
            <button onClick={props.callback}
                    disabled={props.disabled}
                    className={props.disabled ? 'disabled' : ''}>{props.title}</button>
        </div>
    )
}