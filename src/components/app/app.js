import React from 'react';
import MyMap from '../myMap';
import Input from '../input';
import ListRoute from '../list-route';
import './app.css';

const App = ()=>{

    return(
        <div className="container">  
            <div className="row">
                <div className='col-6'>
                    <Input />
                    <ListRoute/>
                </div>
                <div className="col-6">
                    <MyMap/>
                </div>
            </div>   
        </div>  
    );
}

export default App;