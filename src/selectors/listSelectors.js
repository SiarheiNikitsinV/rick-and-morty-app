import { createSelector } from "reselect";

const charactersSelector = (state) => state.characters;
const isLoadingSelector = (state) => state.isLoading;

export const getCharacters = createSelector(
  charactersSelector,
  (characters) => characters
);

export const getIsLoading = createSelector(
  isLoadingSelector,
  (isLoading) => isLoading
);
