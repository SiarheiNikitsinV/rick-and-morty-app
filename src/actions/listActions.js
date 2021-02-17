import { createRoutine } from "redux-saga-routines";

import * as constants from "../utils/constants/listConstants";

export const getDataFromApi = createRoutine(constants.GET_DATA_FROM_API);
