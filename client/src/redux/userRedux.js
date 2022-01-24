import { createSlice } from "@reduxjs/toolkit"

// createSlice cho phep khoi tao state, object of reducer functions and "slice name"

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    success: false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    // loginStart nếu thành công thực hiện action và cập nhật người dùng hiện tại
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOutSuccess: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = false;
    },
    logOutFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOutStart: (state) => {
      state.isFetching = true;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state) => {
      state.isFetching = false;
      state.error = false;
      state.success = true;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },
  }
})

export const userSelector = (state) => state.user.currentUser
export const { loginStart,
  loginSuccess,
  loginFailure,
  logOutStart,
  logOutSuccess,
  logOutFailed,
  registerStart,
  registerSuccess,
  registerFailure } = userSlice.actions;
export default userSlice.reducer
