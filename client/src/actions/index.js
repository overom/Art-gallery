import axios from 'axios';
import { OEUVRES_LIST, FETCH_USER } from '../constants';

export const fetchOeuvre = () => async dispatch => {
  const res = await axios.get('/api/oeuvres');

  dispatch({ type: OEUVRES_LIST, payload: res.data });
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};
