import axios from 'axios';
import {
  OEUVRES_LIST,
  FETCH_USER,
  FETCH_PERSONNAGES,
  FETCH_TABLEAUX,
  FETCH_HIBOUX,
} from '../constants';

export const fetchOeuvre = () => async dispatch => {
  const res = await axios.get('/api/oeuvres');
  dispatch({ type: OEUVRES_LIST, payload: res.data });
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPersonnages = () => async dispatch => {
  const res = await axios.get('/api/personnages');
  dispatch({ type: FETCH_PERSONNAGES, payload: res.data });
};

export const fetchTableaux = () => async dispatch => {
  const res = await axios.get('/api/tableaux');
  dispatch({ type: FETCH_TABLEAUX, payload: res.data });
};

export const fetchHiboux = () => async dispatch => {
  const res = await axios.get('/api/hiboux');
  dispatch({ type: FETCH_HIBOUX, payload: res.data });
};
