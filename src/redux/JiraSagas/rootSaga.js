import { all } from "redux-saga/effects";
import * as JiraSagas from "./UserJiraSaga";
function* rootSaga() {
  yield all([JiraSagas.listenTheSignIn()]);
}
JiraSagas.signInSaga();
export default rootSaga;
