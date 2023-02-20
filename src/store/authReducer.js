const defaultState = {
  email: "",
  password: "",
  isFormValid: false,
};

export const actionTypeReducer = {
  EMAIL: "EMAIL",
  PASSWORD: "PASSWORD",
  LOG_OUT: "LOG_OUT",
  LOGIN: "LOGIN",
};

export const reducerForm = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypeReducer.EMAIL:
      return {
        ...state,
        email: (state.email = action.payload),
      };
    case actionTypeReducer.PASSWORD:
      return {
        ...state,
        password: (state.password = action.payload),
      };
    case actionTypeReducer.LOG_OUT:
      return defaultState;

    case actionTypeReducer.LOGIN:
      return {
        isFormValid: true,
      };
    default:
      return state;
  }
};
