import { put, takeEvery } from "redux-saga/effects";
import { operationLoading, operationSuccess } from "./actions";
import { makeOperation } from "../api";

function* increment() {
  yield put(operationLoading());
  makeOperation();
  yield put(operationSuccess(1));
}

function* decrement() {
  yield put(operationLoading());
  makeOperation();
  yield put(operationSuccess(-1));
}

function* incrementByValue({ payload }: any) {
  yield put(operationLoading());
  makeOperation();
  yield put(operationSuccess(payload));
}

function* decrementByValue({ payload }: any) {
  yield put(operationLoading());
  makeOperation();
  yield put(operationSuccess(-payload));
}

export function* rootSaga() {
  yield takeEvery("INCREMENT_ASYNC", increment);
  yield takeEvery("DECREMENT_ASYNC", decrement);
  yield takeEvery("INCREMENT_BY_VALUE_ASYNC", incrementByValue);
  yield takeEvery("DECREMENT_BY_VALUE_ASYNC", decrementByValue);
}
