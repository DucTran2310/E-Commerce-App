import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logOutStart,
  logOutSuccess,
  logOutFailed,
} from './userRedux'
import { publicRequest } from '../requestMethods'

export const login = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    dispatch(loginFailure())
  }
}

export const register = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data))
    navigate("/login")
  } catch (error) {
    dispatch(registerFailure())
  }
}

// export const logOut = async (dispatch, navigate) => {
//   dispatch(logOutStart());
//   try {
//     const res = await axios.post("/v1/auth/logout");
//     dispatch(logOutSuccess());
//     dispatch(clearUserList());
//     navigate("/login");
//   } catch (err) {
//     dispatch(logOutFailed());
//   }
// };
