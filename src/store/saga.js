import foodListSaga from "./FoodList/foodList.saga";
import { fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield fork(foodListSaga);
}
