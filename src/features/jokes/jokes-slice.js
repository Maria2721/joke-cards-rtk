import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadAnyJoke = createAsyncThunk(
  "@@jokes/load-any-joke",
  (_, { extra: { client, api } }) => {
    return client.get(api.ANY_JOKE);
  }
);

const initialState = {
  status: "idle",
  error: null,
  joke: "",
};

const jokesSlice = createSlice({
  name: "@@jokes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAnyJoke.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadAnyJoke.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadAnyJoke.fulfilled, (state, action) => {
        state.status = "received";
        state.joke = action.payload.data.joke;
      });
  },
});

export const jokesReducer = jokesSlice.reducer;

// selectors
export const selectJokesInfo = (state) => ({
  status: state.jokes.status,
  error: state.jokes.error,
});
