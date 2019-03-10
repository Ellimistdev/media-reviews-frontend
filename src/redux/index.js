import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/AuthReducer';
import movies from './reducers/MovieReducer';
import user from './reducers/UserReducer';
import review from './reducers/ReviewReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  auth,
  movies,
  user,
  review,
});

export default createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);