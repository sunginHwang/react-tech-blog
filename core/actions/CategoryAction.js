import {asyncActionCreator, asyncActionTypeCreator} from "../util/reduxUtil";

export const CATEGORIES = asyncActionTypeCreator('category_categories','ASYNC');
export const getCategories = asyncActionCreator(CATEGORIES);