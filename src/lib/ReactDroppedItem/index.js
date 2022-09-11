import React from "react";

export const ReactDroppedItem = (props) => {

    const { droppedElementProps, dragX, dragY } = props;

    const newProps = {
        draggable: true
    };

    return <div className="dropped-item" style={{left: dragX, top: dragY}} >
        {
           React.Children.map(droppedElementProps, child => {
               return React.cloneElement(child, {newProps}, null );
           })
       }
    </div>
}