import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import movies from './reducers/MoviesReducer'
import { composeWithDevTools } from "redux-devtools-extension"

const rootReducer = combineReducers({
  movies
});

export default createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);