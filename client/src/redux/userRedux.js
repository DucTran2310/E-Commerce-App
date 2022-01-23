import { createSlice } from "@reduxjs/toolkit"

// createSlice cho phep khoi tao state, object of reducer functions and "slice name"

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    // loginStart nếu thành công thực hiện action và cập nhật người dùng hiện tại
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  }
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer
