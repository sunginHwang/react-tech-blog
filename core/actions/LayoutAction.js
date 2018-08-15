import {createAction} from "redux-actions";


export const TOGGLE_PAGE_LOADING= 'toggle_page_loading';
export const togglePageLoading = createAction(TOGGLE_PAGE_LOADING);

export const SHOW_MOBILE_HEADER= 'show_mobile_header';
export const showMobileHeader = createAction(SHOW_MOBILE_HEADER);

export const TOGGLE_SIDE_BAR= 'toggle_side_bar';
export const toggleSideBar = createAction(TOGGLE_SIDE_BAR);