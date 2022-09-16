# Preview



https://user-images.githubusercontent.com/7764389/190599251-5581e43f-47c7-4e3c-830f-f1cfb2557cc3.mp4

  

# Description
  Library to incorporate drag and drop in react applications.

  Steps
  1) Create the drag/drop context using the method createReactDragDropContext
  2) Wrap the component you want to drag with ReactDraggable by passing the above created context
  3) Wrap the component on where you want to drop to with ReactDropArea by passing the above created context
  4) Get the reference to the dropped item by ReactDroppedItem
  5) Refer the sample code here
     
          const ReactDropDropContext = createReactDragDropContext("drop-area-1");

           <ReactDropArea dropContext = {ReactDropDropContext}>
              <Area />
           </ReactDropArea>     

           <ReactDraggable targetContext = {ReactDropDropContext}>
              <Rectangle />
           </ReactDraggable> 

           <ReactDraggable targetContext = {ReactDropDropContext}>
              <Circle />
           </ReactDraggable>
            
# Components
    ReactDraggable
    ReactDropArea
    ReactDroppedItem
    ReactConnector
## Description
    1) Use ReactDraggable to wrap around the element you want to drag
    2) Use ReactDropArea to wrap around the area you want to drag to
    3) Get the Reference with component ReactDroppedItem
