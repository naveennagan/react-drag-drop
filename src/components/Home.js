import React from "react";
import { createReactDragDropContext } from "../lib/ReactDragDropContext";
import { ReactDraggable } from "../lib/ReactDraggable";
import { ReactDropArea } from "../lib/ReactDropArea";
import { Area } from "./Area";
import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";

export const Home = ()=>{

    const ReactDropDropContext = createReactDragDropContext("drop-area-1");

    return (
       <div className="home-container">
           
            {/* <Area />
            <Rectangle /> 
            <Circle /> */}

           <ReactDropArea dropContext = {ReactDropDropContext}>
              <Area />
           </ReactDropArea>     

           <ReactDraggable targetContext = {ReactDropDropContext}>
              <Rectangle />
           </ReactDraggable> 

           <ReactDraggable targetContext = {ReactDropDropContext}>
              <Circle />
           </ReactDraggable> 

        </div>
    )
}