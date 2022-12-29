import React, {useState} from 'react';
import {useDispatch,useSelector} from "react-redux";

function UserPage() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)



    const minUs = ()=>{
        dispatch({
            type:"MINUS",
            payload: +first - +second
        })
    }

    const plUs = ()=>{
        dispatch({
            type:"PLUS",
            payload: +first + +second
        })
    }

    const multiPly = ()=>{
        dispatch({
            type:"MULTIPLY",
            payload: +first * +second
        })
    }

    const deleNie= ()=>{
        dispatch({
            type:"DELENIE",
            payload: +first / +second
        })
    }


    return (
        <div>
            <input type="number" placeholder="numberone" onChange={(event) => setFirst(event.target.value)}/>
            <input type="number" placeholder="numbertwo" onChange={(event) => setSecond(event.target.value)}/>
            
            <button onClick={plUs}>+</button>
            <button onClick={minUs}>-</button>
            <button onClick={multiPly}>*</button>
            <button onClick={deleNie}>/</button>
            <h2>{count}</h2>

        </div>
    );
}

export default UserPage;

