import { OEUVRES_LIST } from '../constants/index';

export default function(state = null, action) {
  switch (action.type) {
    case OEUVRES_LIST:
      return action.payload;
    default:
      return state;
  }
}
