import {createAction} from "redux-actions";


export const TOGGLE_SPINNER_LOADING= 'layout_toggle_spinner_loading';
export const toggleSpinnerLoading = createAction(TOGGLE_SPINNER_LOADING);

export const SHOW_MOBILE_HEADER= 'layout_show_mobile_header';
export const showMobileHeader = createAction(SHOW_MOBILE_HEADER);

export const TOGGLE_SIDE_BAR= 'layout_toggle_side_bar';
export const toggleSideBar = createAction(TOGGLE_SIDE_BAR);
