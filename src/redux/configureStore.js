import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import dragonsReducer from './dragons/dragons';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  dragons: dragonsReducer,
  missions: missionsReducer,
  rockets: rocketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export {
  store as default,
  rootReducer,
};
