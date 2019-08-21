import React from 'react';
import MyMap from '../myMap';
import Input from '../input';
import ListRoute from '../list-route';

const App = ()=>{

    return(
        <div className="container">  
            <div className="row">
                <div className='col-md-4 col-5'>
                    <Input />
                    <ListRoute/>
                </div>
                <div className="col-md-8 col-7">
                    <MyMap/>
                </div>
            </div>   
        </div>  
    );
}

export default App;