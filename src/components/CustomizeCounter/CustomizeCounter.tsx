import React from "react";
import s from "./CustomizeCounter.module.css"
import {CustomizeDisplay} from "./CustomizeDisplay/CustomizeDisplay";
import {Button} from '../button/Button';

type CustomizeDisplayPropsType = {
    count: number
    maxValue: number
    installCount: () => void
}

export function CustomizeCounter (props: CustomizeDisplayPropsType) {
    return (
        <div className='counter'>
            <CustomizeDisplay/>
            <div className="buttonsBlock">
                <Button title='set'
                        callback={props.installCount}
                        disabled={props.count === props.maxValue}
                ></Button>
            </div>
        </div>
    )
}