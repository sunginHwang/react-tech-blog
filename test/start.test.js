import {sum} from '../core/util/ImageUtil';
import {asyncSaga} from '../core/util/ReduxSagaUtil';
import * as CategoryAction from "../store/actions/CategoryAction";
import * as BlogApi from '../core/apis/BlogApi';
import {call, put} from "redux-saga/effects";

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


test('getCategories', () => {
    expect(BlogApi.getCategories()).toEqual([{}]);
});

test('saga', () => {
    const info = asyncSaga(CategoryAction.getCategories, BlogApi.getCategories, '');
    expect(info.next().value).toEqual(put(CategoryAction.getCategories.request()));
    expect(info.next().value).toEqual(call(BlogApi.getCategories, ''));
    expect(info.next().value).toEqual('');
});