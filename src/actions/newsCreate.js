import api from '../utils/request';
import URLS from '../constants/api';
import { NEWS_CREATE } from '.';
import { redirect } from '../utils/navigation';
import ROUTES from '../constants/routes';

const newsCreateFail = (error) => ({
  type: NEWS_CREATE.FAIL,
  error,
});

const newsCreateSuccess = (id) => {
  redirect(ROUTES.ADMIN_NEWS_VIEW(id));

  return {
    type: NEWS_CREATE.SUCCESS,
  };
};

export const newsCreate = (title, description, body, status, createDatetime) => {
  const API_URL = URLS.NEWS_CREATE;

  const payload = {
    ...(title ? { title } : null),
    ...(description ? { description } : null),
    ...(body ? { body } : null),
    ...(status ? { status } : null),
    ...(createDatetime ? { createDatetime } : null),
  };

  return (dispatch) =>
    api
      .post(API_URL, payload)
      .then(({ data }) => {
        return dispatch(newsCreateSuccess(data.id));
      })
      .catch(({ response: { data } }) => dispatch(newsCreateFail(data.message)));
};
