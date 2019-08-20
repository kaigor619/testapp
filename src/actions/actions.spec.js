import {addItem, removeItem, updateList} from './index';


describe('Тестирование action',()=>{
    it('Добавление item',()=>{
        const action={
            type:'ADD_ITEM',
            payload:[1,2,3]
        }
        expect(addItem(action.payload)).toEqual(action);
    });
    it('Удаление item',()=>{
        const action={
            type:'REMOVE_ITEM',
            payload:5
        }
        expect(removeItem(action.payload)).toEqual(action);
    });
    it('Обновление items',()=>{
        const action={
            type:'UPDATE_LIST',
            payload:[1,2,3]
        }
        expect(updateList(action.payload)).toEqual(action);
    });
});