import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/AuthReducer';
import media from './reducers/MovieReducer';
import user from './reducers/UserReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  auth,
  media,
  user,
});

export default createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);