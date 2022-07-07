import * as actionType from '../constants/actionTypes';
// import { createSlice } from '@reduxjs/toolkit';

const authReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, user: action?.data };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, user: null };
    default:
      return state;
  }
};

// const authReducer = createSlice({
//   name: AUTH,
//   initialState: null,
//   reducers: { ...state, user: action.data }
// })

export default authReducer;