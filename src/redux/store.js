import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import userReducer from "./user";
import themeReducer from "./theme";

// const logger = createLogger({ collapsed: true, duration: true, logErrors: true });
const logger = createLogger();

const reducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

// export default configureStore({
//   reducer,
//   middleware: [logger],
//   devTools: process.env.NODE_ENV !== "production",
// });

export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
  middleware: [logger],
  devTools: process.env.NODE_ENV !== "production",
});
