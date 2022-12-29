import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {addUserAction, changeInputAction} from "../../redux/actions";
import User from "../../components/user/User";

function UserPage() {
    const dispatch =useDispatch()

    const {value, users} = useSelector(state => state.usersReducer)

    const changeInput = (event)=>{
        dispatch(changeInputAction(event.target.value))
    }

    const addUser = ()=>{
        dispatch(addUserAction(value))
    }
    return (
        <div>
            <input
            value={value}
            type="text"
            placeholder="name"
            onChange= {changeInput}
            />
            <button onClick={addUser}>add</button>
            <button>delete all</button>
            {users.map((user,index) => <User key = {index} userName ={user}/>)}
        </div>
    );
}

export default UserPage;