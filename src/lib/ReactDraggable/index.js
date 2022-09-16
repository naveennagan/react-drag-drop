import React from "react";

const ReactDraggable = (props)=>{

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
    
    const styles = {
        "height": "fit-content",
        "cursor": "pointer",
        "display": "inline-block"
    }

    return <div className="draggable-item" draggable="true" onDragStart={onDragStart} style={{...styles}}>
       {
           React.Children.map(props.children, child => {
               return React.cloneElement(child, {newProps}, null );
           })
       }
    </div>
}

export default ReactDraggable;