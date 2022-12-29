

const initialState ={
menu: false,
count: 0
   
}


export default function reducer (state = initialState, action){
    if(action.type ==="CHANGE_TITLE"){
        return {...state, title: "Hello World"}
    }
    else if (action.type === "MENU"){
       return {...state, menu: !state.menu}
    }
    else  if (action.type === "VALUE"){
        return {...state, value: action.payload}
    }
    else if (action.type === "ADD_USER"){
        return {...state, users: [...state.users, action.payload]}
    }

    else if (action.type === "MINUS"){
        return {...state, count:  action.payload}
    }
    else if (action.type === "PLUS"){
        return {...state, count:  action.payload}
    }
    else if (action.type === "MULTIPLY"){
        return {...state, count:  action.payload}
    }
    else if (action.type === "DELENIE"){
        return {...state, count:  action.payload}
    }
    return state;
}