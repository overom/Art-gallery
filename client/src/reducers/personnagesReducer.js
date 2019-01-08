import { FETCH_PERSONNAGES } from '../constants/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_PERSONNAGES:
      return action.payload;
    default:
      return state;
  }
}
