import axios from "axios";
import Cookies from 'js-cookie';

const API_URL = 'http://erdent001.pythonanywhere.com'

const instance = axios.create({
  baseURL: API_URL,
  headers: {
      "Content-Type" : "application/json",
  }
})

instance.interceptors.request.use((config) => {
  const token = Cookies.get('token-erdent');
  if (token) {
      config.headers.common.Authorization = `Token ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})


instance.interceptors.response.use((config) => {
  return config
}, (error) => {
  if (error.response.ok) {
      throw new Error(`${error.config.url} not found`);
  }
  return Promise.reject(error)
})



export default instance;
