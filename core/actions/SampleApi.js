import { asyncActionTypeCreator, asyncActionCreator } from '../util/reduxUtil';

export const ASYNC = asyncActionTypeCreator('ReduxSagaExample','ASYNC');
export const asyncCall = asyncActionCreator(ASYNC);

