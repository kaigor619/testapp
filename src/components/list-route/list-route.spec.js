import React from 'react'
import { shallow } from 'enzyme'
import ListRoute from './list-route'

describe('News container', () => {
  const props = { // описываем props
    list: [
        {name:'Москва',id:1},
        {name:'Краснодарск',id:2},
        {name:'Пемза',id:3},
    ],
    removeItem:()=>{},
    updateList:()=>{}
  }

 it("When list is empty", ()=>{
     const nextProps={
         ...props,
         list:[]
     }
     const listRoute=shallow(<ListRoute {...nextProps}/>);

     expect(listRoute.contains('<ul className="list-group list-route">')).toEqual(true).
 })
  
  
  
})