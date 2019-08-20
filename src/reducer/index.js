const initialState={
    list:[]
}

const reducer=(state=initialState, action)=>{

    switch(action.type){

        case 'ADD_ITEM':{
            let item=action.payload;
            let list=state.list.slice();
            let {id,name}=item;

            let options={
                name,
                id,
                coords:[55.75, 37.57]
            }
            list.push(options);
            return {
                ...state,
                list,
            }
        }
        case 'REMOVE_ITEM':{
            let id=action.payload;
            let list=state.list.slice();
            list.forEach((item , index)=>{
                if(item.id==id){
                    list.splice(index, 1);
                }
            })
            return {
                ...state,
                list,
            }
        }
        case 'UPDATE_LIST':{
            let list=action.payload;
            return{
                ...state,
                list,
            }
        }



        default : return state;
    }
}

export {
    reducer,
    initialState
}