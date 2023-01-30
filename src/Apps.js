import React, { useReducer } from "react";
import "./Apps.css";

const initial = 0;

function reducer(state , action){
    //  console.log(state , action);
    if(action.type === "increment"){
        return state + 1;
    }
    if(action.type === "decrement"){
        return state - 1;
    }

     return state;
}

export default function Apps (){
    const [state  , dispatch] = useReducer(reducer , initial)

    return (
        <>
            <p>{state}</p>
            <div className="btn">
                <button onClick={()=> dispatch({type:"increment"})}>Inc</button>
                <button  onClick={()=> dispatch({type:"decrement"})}>Dec</button>
            </div>
        </>
    )
}