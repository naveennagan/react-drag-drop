import React from "react";

export const ReactDraggable = (props)=>{

    const { targetContext } = props;

    const { targetId } = targetContext;

    const newProps = {
        draggable: true
    }

    const onDragStart = (event) => {
        
        const newPropReference =  "copy";

        targetContext[newPropReference] = props.children;

        event.dataTransfer.setData(targetId, newPropReference);
    }
    
    return <div className="draggable-item" draggable="true" onDragStart={onDragStart}>
       {
           React.Children.map(props.children, child => {
               return React.cloneElement(child, {newProps}, null );
           })
       }
    </div>
}