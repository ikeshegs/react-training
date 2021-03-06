import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import StreamReducer from './streamReducer';
import authReducer from './authReducers';

export default combineReducers({
  auth: authReducer,
  form: reducer,
  streams: StreamReducer,
});
