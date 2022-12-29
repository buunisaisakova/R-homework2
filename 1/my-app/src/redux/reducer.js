

const initialState ={
   title: "Old text",
    abouTitle: "-"
}


export default function reducer (state  = initialState, action){
    if(action.type === "CHANGE_TITLE"){
        return {...state, title: "New Text"}
    }
    else if (action.type === "TITLE_WITH_PARAMS"){
        return {...state, abouTitle: action.payload}
    }
    else if (action.type=== "FROM_INPUT"){
        return {...state,abouTitle: action.payload}
    }
    return state
}