import {asyncActionCreator, asyncActionTypeCreator} from "../util/ReduxUtil";

export const CATEGORIES = asyncActionTypeCreator('category_categories','ASYNC');
export const getCategories = asyncActionCreator(CATEGORIES);