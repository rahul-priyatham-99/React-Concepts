import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { incrementC, decrementC, resetC } from './utils/countSlice'

const Count = () => {
    const dispatch = useDispatch()
    const incrementCount = () => {
        dispatch(incrementC())
    }
    const decrementCount = () => {
        dispatch(decrementC())
    }
    const resetCount = () => {
        dispatch(resetC())
    }
    const countValue = useSelector((store) => store.countsl.count)

    return (
        <div className="count-container">
            <h2>Count: {countValue}</h2>
            <div className="btn-group">
                <button onClick={incrementCount}>Increment</button>
                <button onClick={countValue > 0 ?
                    decrementCount : resetCount
                }>Decrement</button>
                <button onClick={resetCount}>Reset</button>
            </div>
        </div>
    )
}

export default Count;