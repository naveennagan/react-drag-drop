import React from "react";

const ReactDroppedItem = (props) => {

    const { droppedElementProps, dropContext, dragX, dragY, index } = props;

    const { targetId } = dropContext;
    

    const newProps = {
        draggable: true
    };

    const onDragStart = (event) => {
        
        dropContext["move"] = index;

        event.dataTransfer.setData(targetId, "move" );
    }

    const styles = {
        "position": "fixed",
        "height": "fit-content",
        "transform": "translate(-50%, -50%)",
        "cursor": "pointer"
    }


    return <div className="dropped-item" draggable="true" onDragStart= {onDragStart} style={{left: dragX, top: dragY, ...styles}} >
        {
           React.Children.map(droppedElementProps, child => {
               return React.cloneElement(child, {newProps}, null );
           })
       }
    </div>
}

export default ReactDroppedItem;