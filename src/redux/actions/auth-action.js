import { REGISTER_AUTH, SIGN_IN_AUTH } from "../types";

export const register = () => {
  return {
    type: REGISTER_AUTH,
  }
}

export const signIn = () => {
  return {
    type: SIGN_IN_AUTH,
  }
}