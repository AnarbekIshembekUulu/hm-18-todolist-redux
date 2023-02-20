import { combineReducers, createStore } from "redux";
import { reducerForm } from "./authReducer";
import { reducerTodo } from "./todoReducer";

const reducers = combineReducers({
  form: reducerForm,
  todo: reducerTodo,
});

export const store = createStore(reducers);
