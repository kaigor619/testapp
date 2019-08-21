import React from 'react';
import { shallow } from 'enzyme';
import {Input} from './input';

describe('Input testing', () => {

    let wrapper;
    const mockAddItemfn = jest.fn();
   
     beforeEach(() => {
       wrapper = shallow(<Input addItem={mockAddItemfn}/>)
     });

     describe('When the form is submitted', () => {

        it('should call the mock addItem function', () => {

         wrapper.find('#formMap').simulate(
           'submit', 
           {preventDefault() {}}
         )
         expect(mockAddItemfn.mock.calls.length).toBe(1);
        })

        it('input value == state.value', () => {

            wrapper.setState({value:'abs'});

            let val=wrapper.find('input').props('value');
            expect(val.value).toBe('abs');
           })
      })
  
})