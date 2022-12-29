import React, {useState} from 'react';
import {useDispatch} from "react-redux";

function UserPage() {
    const dispatch = useDispatch()

    const [input, setInput] = useState("")

    const withParams =() => {
        dispatch({
            type: "TITLE_WITH_PARAMS",
            payload: "hello geekTech"
        })
    }

    const newTitle = ()=>{
        dispatch({
            type: "FROM_INPUT",
            payload: input
        })
    }




    return (
        <div>

            <button onClick={withParams}> change title with params</button>

            <div>
                <input type="text" onChange={(event) => setInput(event.target.value)}/>
                <button onClick={newTitle}>add</button>
            </div>
        </div>
    );
}

export default UserPage;
