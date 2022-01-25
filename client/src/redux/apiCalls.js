import {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
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

export const logout = async (dispatch) => {
  dispatch(logoutStart())
  try {
    dispatch(logoutSuccess())
  } catch (error) {
    dispatch(logoutFailure())
  }
}
