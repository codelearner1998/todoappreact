import React from "react";

function todoItem(props) {

    




  

    return (
        <div onClick={()=>{
            props.Delete(props.id)
        }}>
            <li> {props.text} </li>
        </div>
    )
    
}


export default todoItem