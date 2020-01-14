import { NEWS_VIEW } from '.';
import api from '../utils/request';
import URLS from '../constants/api';

const getNewsViewSuccess = (data) => ({
  type: NEWS_VIEW.GET_SUCCESS,
  data,
});

const getNewsViewStart = () => ({
  type: NEWS_VIEW.GET_START,
});

const getNewsViewError = (error) => ({
  type: NEWS_VIEW.GET_ERROR,
  error,
});

export const getNewsViewAll = (id) => (dispatch) => {
  dispatch(getNewsViewStart());

  const url = URLS.NEWS_VIEW_ALL(id);
  return api
    .get(url)
    .then(({ data }) => dispatch(getNewsViewSuccess(data)))
    .catch(({ response: { data } }) => dispatch(getNewsViewError(data.message)));
};
