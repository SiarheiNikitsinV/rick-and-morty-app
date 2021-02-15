import { assoc } from "lodash/fp";

import {
  ADD,
  ADD_ASYNC,
  GET_DATA_FROM_API,
} from "../utils/constants/listConstants";

const initialState = {
  counter: 1441,
  characters: [],
};

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, counter: state.counter + 1 };
    case ADD_ASYNC:
      return { ...state, counter: state.counter + 1000 };
    case GET_DATA_FROM_API:
      return { ...state, characters: payload };
    default:
      return state;
  }
};

export default listReducer;
