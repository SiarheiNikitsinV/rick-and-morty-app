import axios from "axios";
import reduxSaga from "redux-saga";
import { all, call, put } from "redux-saga/effects";
import { GET_DATA_FROM_API } from "../utils/constants/listConstants";

const fetchData = (data = "") =>
  axios({
    method: "GET",
    url: `https://rickandmortyapi.com/api/character/${data}`,
    responseType: "",
  }).then((res) => {
    return res.data.results;
  });

function* fetchDataFromApi() {
  try {
    const characters = yield call(() => fetchData());
    yield put({ type: GET_DATA_FROM_API, payload: characters });
  } catch (e) {}
}

export default function* rootSaga() {
  yield all([fetchDataFromApi()]);
}
