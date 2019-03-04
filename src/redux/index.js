import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import media from './reducers/MoviesReducer';
import auth from './reducers/AuthReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  auth,
  media,
});

export default createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);