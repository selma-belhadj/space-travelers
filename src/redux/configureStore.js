import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import dragonsReducer from './dragons/dragons';
import missionsReducer from './missions/missions';
import profileReducer from './profile/profile';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  dragons: dragonsReducer,
  missions: missionsReducer,
  profile: profileReducer,
  rockets: rocketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
