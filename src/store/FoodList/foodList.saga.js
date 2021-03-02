import { put, takeEvery } from "redux-saga/effects";
import * as actionTypes from "./foodList.actionsTypes";
import axios from "axios";
import {
  getAllReviewsEndPoint,
  searchReviewsEndPoint,
} from "Components/FoodList/food-list.constants";

function* getTableData({ payload }) {
  yield put({ type: actionTypes.GET_REVIEWS_DATA_PENDING });
  try {
    const result = yield axios(
      getAllReviewsEndPoint(payload.pageIndex, payload.pageSize)
    );
    yield put({
      type: actionTypes.GET_REVIEWS_DATA_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({ type: actionTypes.GET_REVIEWS_DATA_ERROR });
  }
}

function* getTableDataFiltered({ payload }) {
  yield put({ type: actionTypes.GET_REVIEWS_DATA_FILTERED_PENDING });
  try {
    const result = yield axios.post(
      searchReviewsEndPoint(payload.pageIndex, payload.pageSize),
      payload.filterOptions
    );
    yield put({
      type: actionTypes.GET_REVIEWS_DATA_FILTERED_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({ type: actionTypes.GET_REVIEWS_DATA_FILTERED_ERROR });
  }
}

function* foodListSaga() {
  yield takeEvery(actionTypes.GET_REVIEWS_DATA, getTableData);
  yield takeEvery(actionTypes.GET_REVIEWS_DATA_FILTERED, getTableDataFiltered);
}

export default foodListSaga;
