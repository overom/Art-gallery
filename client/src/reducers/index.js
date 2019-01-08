import { combineReducers } from 'redux';
import oeuvresReducer from './oeuvresReducer';
import authReducer from './authReducer';
import personnagesReducer from './personnagesReducer';
import tableauxReducer from './tableauxReducer';
import hibouxReducer from './hibouxReducer';

export default combineReducers({
  oeuvres: oeuvresReducer,
  auth: authReducer,
  personnages: personnagesReducer,
  tableaux: tableauxReducer,
  hiboux: hibouxReducer,
});
