import React, { useState } from "react";
import { ReactDroppedItem } from "../ReactDroppedItem";

export const ReactDropArea = (props)=>{

    const { dropContext } = props;

    const { targetId } = dropContext;

    const newProps = {
        draggable: true
    }

    let [droppedElementsProps, setDroppedElementsProps] = useState([]);

    const onDrop = (event) => {
        
        event.preventDefault();

        var dragX = event.pageX;

        var dragY = event.pageY;
        
        const droppedItemChidProps = dropContext[event.dataTransfer.getData(targetId)];

        const droppedItemProps = {
            droppedItemChidProps,
            dragX,
            dragY
        }
                
        droppedElementsProps = droppedElementsProps.concat(droppedItemProps);

        setDroppedElementsProps(droppedElementsProps);
    };

    const onDragOver = (event) => {
        event.preventDefault();
    };

    const getDroppedView = ()=>{
        console.log(droppedElementsProps);
        return <>
            {
                droppedElementsProps && droppedElementsProps.length > 0 && droppedElementsProps.map((droppedElementProps)=>{
                    return <ReactDroppedItem dragX={droppedElementProps.dragX} 
                    dragY={droppedElementProps.dragY} droppedElementProps={droppedElementProps.droppedItemChidProps} />;
                })
            }
        </>
    }
    
    return (
      <div onDrop={onDrop} onDragOver={onDragOver} className="drop-container">
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(child, {newProps}, null );
            })
        }
        { droppedElementsProps && droppedElementsProps.length > 0 && getDroppedView()}
    </div>)
}