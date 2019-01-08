import { FETCH_HIBOUX } from '../constants/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_HIBOUX:
      return action.payload;
    default:
      return state;
  }
}
