import instance from "./settings";

const registerServices = (data) => {
  return instance.post('/auth/users/', data)
}

const signInServices = (data) => {
  return instance.post('/auth/token/login/', data)
}

export const httpServices = {
  registerServices,
  signInServices
}