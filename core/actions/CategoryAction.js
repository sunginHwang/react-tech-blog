import {asyncActionCreator, asyncActionTypeCreator} from "../util/ReduxUtil";

const prefix = 'CATEGORY_';


export const CATEGORIES = asyncActionTypeCreator(`${prefix}FETCH_CATEGORIES`);
export const getCategories = asyncActionCreator(CATEGORIES);
