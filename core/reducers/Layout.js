import { handleActions } from 'redux-actions';
import * as layout from '../actions/LayoutAction';

const initialState = {
    pageLoading: false,
    sideBar: false,
    mobileHeader: false
};

export const LayoutReducer =  handleActions({
    [layout.toggleSideBar]: (state, action) => {
        return { ...state, sideBar: action.payload };
    },
    [layout.togglePageLoading]: (state, action) => {
        return { ...state, pageLoading: action.payload };
    },
    [layout.showMobileHeader]: (state, action) => {
        return { ...state, mobileHeader: action.payload };
    },
}, initialState);


