import React, { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  count: 0,
  user: null,
  theme: "light",
};

// Action types
const actionTypes = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  SET_USER: "SET_USER",
  TOGGLE_THEME: "TOGGLE_THEME",
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case actionTypes.RESET:
      return { ...state, count: 0 };
    case actionTypes.SET_USER:
      return { ...state, user: action.payload };
    case actionTypes.TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action creators
  const actions = {
    increment: () => dispatch({ type: actionTypes.INCREMENT }),
    decrement: () => dispatch({ type: actionTypes.DECREMENT }),
    reset: () => dispatch({ type: actionTypes.RESET }),
    setUser: (user) => dispatch({ type: actionTypes.SET_USER, payload: user }),
    toggleTheme: () => dispatch({ type: actionTypes.TOGGLE_THEME }),
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppContext;
