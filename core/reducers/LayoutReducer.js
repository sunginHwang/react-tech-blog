import { handleActions } from 'redux-actions';
import * as layout from '../actions/LayoutAction';

const initialState = {
    pageLoading: false,
    sideBar: false,
    mobileHeader: false
};

export const LayoutReducer =  handleActions({
    [layout.toggleSideBar]: (state, result) => {
        return { ...state, sideBar: result.payload };
    },
    [layout.togglePageLoading]: (state, result) => {
        return { ...state, pageLoading: result.payload };
    },
    [layout.showMobileHeader]: (state, result) => {
        return { ...state, mobileHeader: result.payload };
    },
}, initialState);


