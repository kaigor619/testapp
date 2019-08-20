const addItem=(item)=>{
    return{
        type:'ADD_ITEM',
        payload:item
    }
}
const removeItem=(id)=>{
    return{
        type:'REMOVE_ITEM',
        payload:id
    }
}

const updateList=(list)=>{
    return{
        type:'UPDATE_LIST',
        payload:list
    }
}



export {
    addItem,
    removeItem,
    updateList
}