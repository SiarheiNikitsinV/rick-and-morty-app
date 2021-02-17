import axios from "axios";
import reduxSaga from "redux-saga";
import { all, call, put } from "redux-saga/effects";
import { GET_DATA_FROM_API } from "../utils/constants/listConstants";
import { getDataFromApi } from "../actions/listActions";

const fetchData = (data = "") =>
  axios({
    method: "GET",
    url: `https://rickandmortyapi.com/api/character/?page=${data}`,
    responseType: "",
  }).then((res) => {
    return res.data;
  });

function* fetchDataFromApi(data = 1) {
  try {
    yield put(getDataFromApi.trigger());

    const characters = yield call(() => fetchData(data));

    yield put(getDataFromApi.success(characters));
  } catch (e) {
    yield put(getDataFromApi.failure(e.message));
  } finally {
    yield put(getDataFromApi.fulfill());
  }
}

export default function* rootSaga() {
  yield all([fetchDataFromApi()]);
}
