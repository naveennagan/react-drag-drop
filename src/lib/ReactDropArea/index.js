import React, { useState } from "react";

//import ReactDroppedItem from "../ReactDroppedItem";

var ReactDroppedItem = require('../ReactDroppedItem').default;


const ReactDropArea = (props)=>{

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

        const eventType = event.dataTransfer.getData(targetId);

        if(eventType.includes("move")){

            var index = dropContext[eventType];
            
            droppedElementsProps[index].dragX = dragX;

            droppedElementsProps[index].dragY = dragY;

            setDroppedElementsProps([...droppedElementsProps]);

        }
        else if(eventType.includes("copy")){
        
            let droppedItemChidProps = dropContext[eventType];

            let uniqueid = dropContext["uniqueid"]+"_"+new Date().getTime();

            let droppedItemProps = {
                droppedItemChidProps,
                dragX,
                dragY,
                data : {},
                uniqueid
            }
                    
            droppedElementsProps = droppedElementsProps.concat(droppedItemProps);

            dropContext.data = droppedElementsProps;

            setDroppedElementsProps(droppedElementsProps);
        }
    };

    const onDragOver = (event) => {
        event.preventDefault();
    };



    const getDroppedView = ()=>{
        return <>
            {
                droppedElementsProps && droppedElementsProps.length > 0 && droppedElementsProps.map((droppedElementProps, index)=>{
                    return <ReactDroppedItem index={index} dragX={droppedElementProps.dragX} 
                    dragY={droppedElementProps.dragY} droppedElementProps={droppedElementProps.droppedItemChidProps} 
                    dropContext={dropContext} uniqueid = {droppedElementProps.uniqueid} />;
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

export default ReactDropArea;