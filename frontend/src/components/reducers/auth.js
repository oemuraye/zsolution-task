import * as actionType from '../constants/actionTypes';

const authReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, user: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, user: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;