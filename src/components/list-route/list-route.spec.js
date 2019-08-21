import React from 'react';
import { shallow } from 'enzyme';
import {ListRoute} from './list-route';

describe('Testing ListRoute', () => {

    let wrapper;
    const mockRemoveItem = jest.fn();
    const mockUpdateList = jest.fn();

    let list=[
        {name:'Москва',id:1},
        {name:'Краснодар',id:2},
        {name:'Питер',id:3},
        {name:'Хабаровск',id:4}
    ];
   
     beforeEach(() => {
       wrapper = shallow(<ListRoute removeItem={mockRemoveItem} updateList={mockUpdateList} list={list}/>)
     });

    //  describe('removeItem', () => {

        it('Availible list route', () => {

         let st_list=wrapper.state('list');
         expect(st_list.length).toBe(list.length);

        });

        it('input value == state.value', () => {

            wrapper.setState({value:'abs'});

            let val=wrapper.find('input').props('value');
            expect(val.value).toBe('abs');
           })
    //   })
  
})