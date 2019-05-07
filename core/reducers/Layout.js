import { handleActions } from 'redux-actions';
import * as layout from '../actions/LayoutAction';

const initialState = {
    spinnerLoading: false,
    sideBar: false,
    mobileHeader: false
};

export const LayoutReducer =  handleActions({
    [layout.toggleSideBar]: (state, action) => {
        return { ...state, sideBar: action.payload };
    },
    [layout.toggleSpinnerLoading]: (state, action) => {
        return { ...state, spinnerLoading: action.payload };
    },
    [layout.showMobileHeader]: (state, action) => {
        return { ...state, mobileHeader: action.payload };
    },
}, initialState);


