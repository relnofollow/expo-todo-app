import types from './actionTypes';

const actionCreators = {
    addList: (title) => {
        let listId = Math.round(Math.random() * 100);
        return { type: types.ADD_LIST, payload: { listId, title } };
    },
    deleteList: (listId) => {
        return { type: types.DELETE_LIST, payload: { listId } };
    },
    renameList: (listId, title) => {
        return { type: types.RENAME_LIST, payload: { listId, title } };
    },
    addItem: (listId, text, completed = false) => {
        let itemId = Math.round(Math.random() * 100);
        return { type: types.ADD_ITEM, payload: { listId, itemId, text, completed } };
    },
    deleteItem: (listId, itemId) => {
        return { type: types.DELETE_ITEM, payload: { listId, itemId } };
    },
    editItem: (listId, itemId, text) => {
        return { type: types.EDIT_ITEM, payload: { listId, itemId, text } };
    },
    toggleItem: (listId, itemId) => {
        return { type: types.TOGGLE_ITEM, payload: { listId, itemId } };
    },
    toggleConfirmDelete: () => ({ type: types.TOGGLE_CONFIRM_DELETE }),
    toggleDarkTheme: () => ({ type: types.TOGGLE_DARK_THEME })
};

export default actionCreators;