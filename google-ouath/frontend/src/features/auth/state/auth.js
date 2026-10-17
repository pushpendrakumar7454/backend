import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    accessToken: null,
    isLoading: false,
  },

  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },

    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },

    removeUser: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isLoading = false;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addUser, setAccessToken, removeUser, setLoading } =
  authSlice.actions;

export default authSlice.reducer;
