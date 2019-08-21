import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../actions';

export class Input extends Component{

    constructor(props){
        super(props);

        this.state={
            value:''
        }
        this.uniqueId=1;
        this.onSubmit=this.onSubmit.bind(this);
        this.onKeyDown=this.onKeyDown.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        let {value}=this.state;
        this.props.addItem({name:value, id:this.uniqueId});
        this.setState({value:''});
        this.uniqueId++;
    }
    onKeyDown(e){
        this.setState({value:e.target.value});
        
    }
    render(){
        return(
            <form onSubmit={this.onSubmit} action="" method="post" id="formMap">
                <input type="text" id="input-add-item" className="form-control" placeholder="Новая точка маршрута" onChange={this.onKeyDown} value={this.state.value}/>
            </form>
        );
    }
}
const mapStateToProps=()=>{
    return{}
}
const mapDispatchToProps={
    addItem,
}
export default connect(mapStateToProps, mapDispatchToProps)(Input);