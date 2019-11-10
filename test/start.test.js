import {sum} from '../core/util/ImageUtil';
import {asyncSaga} from '../core/util/ReduxSagaUtil';
import * as CategoryAction from "../store/actions/CategoryAction";
import * as BlogApi from '../core/apis/BlogApi';
import {call, put} from "redux-saga/effects";

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('saga', () => {
    const info = asyncSaga(CategoryAction.getCategories, BlogApi.getCategories, '');
    expect(info.next().value).toBe(put(CategoryAction.getCategories.request()));
    expect(info.next().value).toBe(put(CategoryAction.getCategories.success()));
});