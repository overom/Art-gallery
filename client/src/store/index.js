import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import reduxThunk from 'redux-thunk';
export default function configureStore() {
  return createStore(reducers, {}, applyMiddleware(reduxThunk));
}
