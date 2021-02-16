import { assoc } from "lodash/fp";

import { GET_DATA_FROM_API } from "../utils/constants/listConstants";

const initialState = {
  characters: [],
};

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_FROM_API:
      return { ...state, characters: payload };
    default:
      return state;
  }
};

export default listReducer;
