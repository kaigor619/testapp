import React, {Component} from 'react';
import {connect} from 'react-redux';
import update from "immutability-helper";
import HTML5Backend from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd';
import {removeItem, updateList} from '../../actions';
import Card from '../card';

const ListRouteContainer=({data})=>{
    if(data.length==0)
        return null;
    return(
        <ul className="list-group list-route">
            {data}
        </ul>
    );
}

export class ListRoute extends Component{

    constructor(props){
        super(props);
        this.deleteItem=this.deleteItem.bind(this);
        this.moveCard=this.moveCard.bind(this);
    }

    deleteItem(id){
        this.props.removeItem(id);
    }

    moveCard(dragIndex, hoverIndex){
        let {list}=this.props;
        const dragCard = list[dragIndex];
        let newList=update(list, {
            $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        });
        this.props.updateList(newList);
    }

    render(){
        let {list}=this.props;
        let items=list.map(({name, id}, i)=>{
            return(
                <Card
                    key={id}
                    index={i}
                    id={id}
                    text={name}
                    moveCard={this.moveCard}
                    deleteItem={this.deleteItem}
                />
            );
        });
        return(
            <DndProvider backend={HTML5Backend}>
                <ListRouteContainer data={items}/>
            </DndProvider>
        );
    }
}

const mapStateToProps=({list})=>{
    return{
        list
    }
}
const mapDispatchToProps={
    removeItem,
    updateList
}
export default connect(mapStateToProps, mapDispatchToProps)(ListRoute);