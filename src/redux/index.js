import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/AuthReducer';
import media from './reducers/MovieReducer';
import user from './reducers/UserReducer';
import reviews from './reducers/ReviewReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  auth,
  media,
  user,
  reviews,
});

export default createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);