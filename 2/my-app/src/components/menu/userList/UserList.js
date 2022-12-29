import React from 'react';
import {useSelector} from "react-redux";
function UserList() {
    const users = useSelector(state => state.users)
    return (
        <div>
            <ul>
                {users.map(user=> <li>{user}</li>)}
            </ul>
        </div>
    );
}

export default UserList;