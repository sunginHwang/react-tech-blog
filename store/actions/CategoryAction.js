import {asyncActionCreator, asyncActionTypeCreator} from "../../core/util/ReduxUtil";

const prefix = 'CATEGORY_';


export const CATEGORIES = asyncActionTypeCreator(`${prefix}FETCH_CATEGORIES`);
export const getCategories = asyncActionCreator(CATEGORIES);
