import {
  GET_REVIEWS_DATA_PENDING,
  GET_REVIEWS_DATA_ERROR,
  GET_REVIEWS_DATA_SUCCESS,
  GET_REVIEWS_DATA_FILTERED_SUCCESS,
  GET_REVIEWS_DATA_FILTERED_PENDING,
  GET_REVIEWS_DATA_FILTERED_ERROR,
  SET_CURRENT_SELECTED_REVIEW,
  RESET_CURRENT_SELECTED_REVIEW,
} from "./foodList.actionsTypes";

const initialTableData = { reviews: [], totalItems: 0, totalPages: 0 };
const initialState = {
  tableData: initialTableData,
  loading: false,
  error: false,
  selectedReview: null,
};

export const foodListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS_DATA_FILTERED_PENDING:
    case GET_REVIEWS_DATA_PENDING:
      return { ...state, loading: true };
    case GET_REVIEWS_DATA_FILTERED_SUCCESS:
    case GET_REVIEWS_DATA_SUCCESS:
      const data = action.payload;
      return {
        ...state,
        loading: false,
        tableData: {
          reviews: data.reviews,
          totalItems: data.totalItems,
          totalPages: data.totalPages,
        },
      };
    case GET_REVIEWS_DATA_FILTERED_ERROR:
    case GET_REVIEWS_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        tableData: initialTableData,
      };
    case SET_CURRENT_SELECTED_REVIEW:
      return {
        ...state,
        selectedReview: state.tableData.reviews.find(
          (r) => action.payload === r.id
        ),
      };
    case RESET_CURRENT_SELECTED_REVIEW:
      return { ...state, selectedReview: null };
    default:
      return state;
  }
};
