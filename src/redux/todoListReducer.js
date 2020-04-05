import produce from 'immer';

import initialState from './initialState';
import types from './actionTypes';

const todoListReducer = (state = initialState.lists, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.ADD_LIST: {
            return produce(state, lists => {
                let { listId, title } = payload;
                lists.push({
                    id: listId,
                    title,
                    items: []
                });
            })
        }
        case types.DELETE_LIST: {
            return produce(state, lists => {
                let { listId } = payload;
                console.log(payload);
                console.log(lists);
                return lists.filter(list => list.id !== listId);
            });
        }
        case types.RENAME_LIST: {
            return produce(state, lists => {
                const { listId, title } = payload;

                lists.find(list => list.id === listId).title = title;
            });
        }
        case types.ADD_ITEM: {
            return produce(state, lists => {
                let { listId, itemId, text, completed } = payload;

                let list = lists.find(_list => _list.id === listId);

                list.items.push({ id: itemId, text, completed });
            });
        }
        case types.DELETE_ITEM:
            return produce(state, lists => {
                let { listId, itemId } = payload;

                console.log(payload);

                let list = lists.find(_list => _list.id === listId);

                list.items = list.items.filter(item => item.id !== itemId);
            });
        case types.EDIT_ITEM:
            return produce(state, lists => {
                let { listId, itemId, text } = payload;

                let list = lists.find(_list => _list.id === listId);
                let item = list.items.find(_item => _item.id === itemId);

                item.text = text;
            });
        case types.TOGGLE_ITEM: {
            return produce(state, lists => {
                let { listId, itemId } = payload;

                let list = lists.find(_list => _list.id === listId);
                let item = list.items.find(_item => _item.id === itemId);

                item.completed = !item.completed;
            });
        }
        default:
            return state;
    }

};

export default todoListReducer;