import { httpServices } from "../../https/services"
import { register, signIn } from "../actions/auth-action"
import { showLoading, hideLoading } from "../actions/action";
import Cookies from 'js-cookie';

export const regsiterReduxServices = (data) => {
  return async (dispatch) => {
    try {
      dispatch(showLoading())
      const response = httpServices.registerServices(data)
      console.log(response)
      dispatch(register())
    } catch (e) {
      console.log(e)
    }
    finally {
      dispatch(hideLoading())
    }
  }
}

export const signInReduxServices = (data) => {
  return async (dispatch) => {
    try {
      dispatch(showLoading())
      const response = await httpServices.signInServices(data)
      console.log(response)
      Cookies.set('token-erdent', response.data['auth_token'])
      // dispatch(signIn())
    } catch (e) {
      console.log(e)
    }
    finally {
      dispatch(hideLoading())
    }
  }
}