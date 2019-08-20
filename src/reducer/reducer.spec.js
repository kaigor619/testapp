import {reducer, initialState} from "./index";


describe("Тестирование Reducer", ()=>{
    it('Добавление новой точки маршрута', ()=>{
        const action={
            type: 'ADD_ITEM',
            payload:{name:'Москва',id:1,coords:[55.75, 37.57]}
        }
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            list:[action.payload]
        });
    });

    it('Удаление точки маршрута', ()=>{
        const initialState={
            list:[
                {name:'Москва', id:1},
                {name:'Краснодарск', id:2},
                {name:'Питер', id:3},
                {name:'Хабаровск', id:4},
            ]
        }

        const action={
            type: 'REMOVE_ITEM',
            payload:3
        }
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            list:[
                {name:'Москва', id:1},
                {name:'Краснодарск', id:2},
                {name:'Хабаровск', id:4},
            ]
        });
    }); 

    it('Обновление списка', ()=>{
        const initialState={
            list:[
                {name:'Москва', id:1},
                {name:'Краснодарск', id:2},
            ]
        }

        const action={
            type: 'UPDATE_LIST',
            payload:[                
                {name:'Питер', id:3},
                {name:'Хабаровск', id:4}
            ]
        }
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            list:action.payload
        });
    });
})