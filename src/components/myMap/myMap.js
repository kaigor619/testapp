import React, {Component} from 'react';
import { YMaps, Map , Placemark, Polyline} from 'react-yandex-maps';
import {connect} from 'react-redux';
import {updateList} from '../../actions';


class MyMap extends Component{


    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    componentWillMount(){
        let {list}=this.props;
        this.setState({list});
    }
    componentDidUpdate(prev){
        if(prev.list!==this.props.list){
            this.setState({list:this.props.list});
        }
    }

    onMouseDown(e, id){
        let curr_coords=e.get("target").geometry['_coordinates'];
        this.setState(({list})=>{
            let copy_list=list.slice();
            copy_list.forEach((item)=>{
                if(item.id==id){
                    item.coords=curr_coords;
                }
            });
            return{
                list:copy_list
            }
        });
    }

    createCoords(){
        let {list}=this.state;
        let mas_coords=[];
        let markers=list.map(({name, id, coords})=>{
            mas_coords.push(coords);
            return(
                <Placemark
                    key={id}
                    defaultGeometry={coords}
                    properties={{
                        balloonContent  :name,
                    }} 
                    options={{
                        draggable:true,
                    }}
                    onDrag={(e)=>{this.onMouseDown(e,id)}}
                />
            )
        });
        return {
            'placemark_coords': mas_coords,
            markers,
        };
    }

    render(){
        let {placemark_coords, markers}=this.createCoords();
        return(
            <YMaps
                query={{
                ns: 'use-load-option',
                load:
                'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
                }}> 

                <Map
                    defaultState={{
                    center: [55.75, 37.57],
                    zoom: 9,
                    controls: ['zoomControl', 'fullscreenControl'],
                    }}
                    width='100%'
                    height='400px'>

                    {markers}

                    <Polyline 
                        geometry={placemark_coords}
                        options={{
                            balloonCloseButton: false,
                            strokeColor: '#000',
                            strokeWidth: 4,
                            strokeOpacity: 0.5
                        }}/>
                </Map>
            </YMaps>
        );
    }
}

const mapStateToProps=({list})=>{
    return {
        list
    }
}
const mapDispatchToProps={
    updateList
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMap);