import { createSlice } from "@reduxjs/toolkit";
import api from "../api/axiosClient";

// Slice

const initialUser = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : null;
const slice = createSlice({
  name: "auth",
  initialState: {
    auth: initialUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.auth = action?.payload.email;
      const remainingMilliseconds = 60 * 60 * 1000;
      const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
      localStorage.setItem("expiryDate", expiryDate.toISOString());
      localStorage.setItem("auth", JSON.stringify(action?.payload?.email));
      localStorage.setItem("token", JSON.stringify(action?.payload?.token));
    },
    logoutSuccess: (state, action) => {
      state.auth = null;
      localStorage.removeItem("expiryDate");
      localStorage.removeItem("auth");
      localStorage.removeItem("token");
    },
  },
});

export default slice.reducer;

// Actions

const { loginSuccess, logoutSuccess } = slice.actions;

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const res = await api.post("auth/login", { email, password });
      if (res.status === 200) {
        let token = res.data.token;
        dispatch(loginSuccess({ email, token }));
      }
    } catch (e) {
      return console.error(e.message);
    }
  };

export const logout = () => async (dispatch) => {
  try {
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
