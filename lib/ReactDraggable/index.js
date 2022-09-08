import React from "react";

export const ReactDraggable = (props)=>{

    const newProps = {
        draggable: true
    }
    
    return <>
       {
           React.Children.map(props.children, child => {
               return React.cloneElement(child, {newProps}, null );
           })
       }
    </>
}