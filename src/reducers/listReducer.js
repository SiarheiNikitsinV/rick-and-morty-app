import { assoc } from "lodash/fp";

import { getDataFromApi } from "../actions/listActions";

const initialState = {
  isLoading: false,
  error: "",
  characters: {
    info: {},
    results: [],
  },
};

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case getDataFromApi.TRIGGER:
      return assoc(["isLoading"], true, state);
    case getDataFromApi.SUCCESS:
      return assoc(["characters"], payload, state);
    case getDataFromApi.FAILURE:
      return assoc(["error"], payload, state);
    case getDataFromApi.FULFILL:
      return assoc(["isLoading"], false, state);
    default:
      return state;
  }
};

export default listReducer;
