import {
  GET_REVIEWS_DATA,
  GET_REVIEWS_DATA_FILTERED,
  SET_CURRENT_SELECTED_REVIEW,
  RESET_CURRENT_SELECTED_REVIEW,
} from "./foodList.actionsTypes";

const getTableData = (data) => ({ type: GET_REVIEWS_DATA, payload: data });

const getTableDataFiltered = (data) => ({
  type: GET_REVIEWS_DATA_FILTERED,
  payload: data,
});

const setCurrentSelectedReview = (reviewId) => ({
  type: SET_CURRENT_SELECTED_REVIEW,
  payload: reviewId,
});

const resetCurrentSelectedReview = () => ({
  type: RESET_CURRENT_SELECTED_REVIEW,
});

export {
  getTableData,
  getTableDataFiltered,
  setCurrentSelectedReview,
  resetCurrentSelectedReview,
};
