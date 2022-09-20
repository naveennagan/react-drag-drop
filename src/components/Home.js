import React from "react";

import { ReactDraggable } from "../lib";

import { ReactDropArea } from "../lib";

import { createReactDragDropContext } from "../lib";

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

           <ReactDraggable targetContext = {ReactDropDropContext} uniqueid="rectangle-item">
              <Rectangle />
           </ReactDraggable> 

           <ReactDraggable targetContext = {ReactDropDropContext} uniqueid="circle-item">
              <Circle />
           </ReactDraggable> 

        </div>
    )
}