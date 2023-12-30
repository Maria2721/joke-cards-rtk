import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import * as api from "./config";
import { themeReducer } from "./features/theme/theme-slice";
import { jokesReducer } from "./features/jokes/jokes-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    jokes: jokesReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
