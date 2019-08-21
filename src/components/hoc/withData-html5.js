import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd';

const withDataHTML5=()=>(Wrapped)=>{
    return (props)=>{
        return(
            <DndProvider backend={HTML5Backend}>
                
                <Wrapped {...props} />
                 
            </DndProvider>
        );
    }
}

export default withDataHTML5;