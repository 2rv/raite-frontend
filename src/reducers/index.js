import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import login from './login';
import navigate from './navigate';
import newsList from './newsList';
import newsView from './newsView';
import newsEdit from './newsEdit';
import newsCreate from './newsCreate';

export default combineReducers({
  form,
  login,
  navigate,
  newsList,
  newsView,
  newsEdit,
  newsCreate,
});
