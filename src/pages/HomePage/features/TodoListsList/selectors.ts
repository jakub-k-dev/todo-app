import { StoreState } from "src/reducer";

const pathToState = (state: StoreState) => state.homePage.todoLists;

export const getTodoLists = (state: StoreState) => pathToState(state).todoLists;

export const getIsLoading = (state: StoreState) => pathToState(state).isLoading;
