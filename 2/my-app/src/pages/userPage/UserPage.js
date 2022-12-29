import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import UserList from "../../components/menu/userList/UserList";
function UserPage() {
    const dispatch = useDispatch()
    const value = useSelector(state => state.value)

    const changeValue = (event)=>{
        dispatch({
            type:'VALUE',
            payload: event.target.value
        })
    }

    const addUser = ()=>{
        dispatch({
            type:"ADD_USER",
            payload: value
        })
    }
    return (
        <div>
            <input type="text"
                   placeholder="name"
            onChange={changeValue}
            />
            <button onClick={addUser}>add</button>
            <UserList/>
        </div>
    );
}

export default UserPage;

