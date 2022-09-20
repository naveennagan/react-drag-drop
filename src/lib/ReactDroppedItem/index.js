import React from "react";

const ReactDroppedItem = (props) => {

    const { droppedElementProps, dropContext, dragX, dragY, index, uniqueid } = props;

    const { targetId } = dropContext;

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


    return <div className="dropped-item" draggable="true" onDragStart= {onDragStart} style={{left: dragX, top: dragY, ...styles}} 
    uniqueid = {uniqueid} >
        {
           React.Children.map(droppedElementProps, child => {
            return React.cloneElement(child, { uniqueid });
           })
       }
    </div>
}

export default ReactDroppedItem;