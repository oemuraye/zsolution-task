import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, DELETE, FETCH_SINGLE } from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();

    dispatch({ type: FETCH_SINGLE, payload: data });
  } catch (error) {
    console.log(error);
  }
};



export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};