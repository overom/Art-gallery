import { combineReducers } from 'redux';
import oeuvresReducer from './oeuvresReducer';
import authReducer from './authReducer';

export default combineReducers({
  oeuvres: oeuvresReducer,
  auth: authReducer,
});
