import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import { success, responseError } from "../actioncreators/ActionCreators";
import { constants } from "../actioncreators/Constants";

let url = "https://reqres.in/api";

export function* sagafunction() {
  yield takeLatest("Login", login);
  yield takeLatest("Register", register);
}

function* login(action) {
  // console.log("Sagas login action", action, constants.Login);
  const tempUrl = url + "/login";
  try {
    const res = yield call(() =>
      axios.post(tempUrl, {
        email: action.data.email,
        password: action.data.password,
      })
    );
    yield put(success({ token: res.data.token, ...action.data }));
  } catch (error) {
    // console.log("Sagas In Login error ", error);
    yield put(responseError(error));
  }
}

function* register(action) {
  // console.log("Sagas register action", action, constants.Register);
  const tempUrl = url + "/user";
  try {
    const res = yield call(() =>
      axios.post(tempUrl, {
        email: action.data.email,
        password: action.data.password,
      })
    );
    yield put(
      success({ id: res.data.id, token: res.data.token, ...action.data })
    );
  } catch (error) {
    // console.log("Sagas In Register error ", error);
    yield put(responseError(error));
  }
}
