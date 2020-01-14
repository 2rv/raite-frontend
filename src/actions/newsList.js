import { NEWS_LIST } from '.';
import api from '../utils/request';
import URLS from '../constants/api';

const getNewsListSuccess = (data) => ({
  type: NEWS_LIST.GET_SUCCESS,
  data,
});

const getNewsListStart = () => ({
  type: NEWS_LIST.GET_START,
});

const getNewsListError = (error) => ({
  type: NEWS_LIST.GET_ERROR,
  error,
});

export const getNewsList = () => (dispatch) => {
  dispatch(getNewsListStart());

  const url = URLS.NEWS_LIST;
  return api.get(url).then(({ data }) => dispatch(getNewsListSuccess(data)));
};

export const getNewsListAll = () => (dispatch) => {
  dispatch(getNewsListStart());

  const url = URLS.NEWS_LIST_ALL;
  return api
    .get(url)
    .then(({ data }) => dispatch(getNewsListSuccess(data)))
    .catch(({ response: { data } }) => dispatch(getNewsListError(data.message)));
};
