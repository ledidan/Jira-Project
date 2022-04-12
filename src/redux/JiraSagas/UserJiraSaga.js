import Axios from "axios";
import {
  call,
  delay,
  fork,
  take,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { USER_SIGNIN_API } from "../constants/JiraConstants";
import { JiraService } from "../services/JiraService";

// Action Saga Management
export function* signInSaga(action) {
  console.log(action);
  yield delay(500);

  // Call API
  try {
    const { data, status } = yield JiraService.signInJira(action.userLogin);
    console.log(data, status);
  } catch (err) {
    console.log(err.response?.data);
  }
}
export function* listenTheSignIn() {
  yield takeLatest(USER_SIGNIN_API, signInSaga);
}
