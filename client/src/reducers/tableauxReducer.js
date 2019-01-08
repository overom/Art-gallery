import { FETCH_TABLEAUX } from '../constants/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_TABLEAUX:
      return action.payload;
    default:
      return state;
  }
}
