import { ACTIVE_NAVIGATE, CLOSE_BURGER, OPEN_BURGER, TOGGLEDRAWER, SHOW_LOADING, HIDE_LOADING } from '../types';

export const activeAction = (number) => {
  return {
    type: ACTIVE_NAVIGATE,
    payload: number
  }
}

export const openBurger = () => {
  return {
    type: OPEN_BURGER,
  }
}

export const closeBurger = () => {
  return {
    type: CLOSE_BURGER,
  }
}

export const toggleDrawer = (anchor, boolean) => {
  return {
    type: TOGGLEDRAWER,
    payload: {anchor, boolean}
  }
}

export const showLoading = () => {
  return {
    type: SHOW_LOADING
  }
}

export const hideLoading = () => {
  return {
    type: HIDE_LOADING
  }
}