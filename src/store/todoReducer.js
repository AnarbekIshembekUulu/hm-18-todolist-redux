const defaultState = [];

export const actionTypeReducerTodo = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  DELETE_ALL_TODO: "DELETE_ALL_TODO",
  EDIT_TODO: "EDIT_TODO",
};

export const reducerTodo = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypeReducerTodo.ADD_TODO:
      return [...state, action.payload];
    case actionTypeReducerTodo.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case actionTypeReducerTodo.DELETE_ALL_TODO:
      return [];
    case actionTypeReducerTodo.EDIT_TODO:
      const editTodo = [...state].map((e) => {
        if (e.id === action.payload.id) {
          e.title = action.payload.value;
        }
        return e;
      });
      return editTodo;
    default:
      return state;
  }
};
