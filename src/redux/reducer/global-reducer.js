import { ACTIVE_NAVIGATE, OPEN_BURGER, CLOSE_BURGER, HIDE_LOADING, SHOW_LOADING } from '../types';

const defaultState = {
  active: null,
  right: false,
  loading: false,
  error: null
}

export const globalReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ACTIVE_NAVIGATE: {
      return {
        ...state,
        active: action.payload
      }
    }
    case OPEN_BURGER: {
      return {
        ...state,
        open: true
      }
    }
    case CLOSE_BURGER: {
      return {
        ...state,
        open: false
      }
    }
    case SHOW_LOADING: {
      return {
        ...state, 
        loading: true
      }
    }
    case HIDE_LOADING: {
      return {
        ...state, 
        loading: false
      }
    }
    default: 
      return state;
  }
}