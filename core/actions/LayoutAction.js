import {createAction} from "redux-actions";

const prefix = 'LAYOUT_';


export const toggleSpinnerLoading = createAction(`${prefix}TOGGLE_SPINNER_LOADING`);
export const showMobileHeader = createAction(`${prefix}SHOW_MOBILE_HEADER`);
export const toggleSideBar = createAction(`${prefix}TOGGLE_SIDE_BAR`);
