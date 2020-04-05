import produce from 'immer';

import initialState from './initialState';
import types from './actionTypes';

const settingsReducer = (state = initialState.settings, action) => {
    const { type } = action;

    switch (type) {
        case types.TOGGLE_CONFIRM_DELETE: {
            return produce(state, settings => {
                settings.confirmDelete = !settings.confirmDelete
            })
        }
        case types.TOGGLE_DARK_THEME: {
            return produce(state, settings => {
                settings.isDarkTheme = !settings.isDarkTheme
            })
        }
        default:
            return state;
    }

};

export default settingsReducer;