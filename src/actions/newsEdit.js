import api from '../utils/request';
import URLS from '../constants/api';
import { NEWS_EDIT } from '.';
import { redirect } from '../utils/navigation';
import ROUTES from '../constants/routes';

const newsActionFail = (error) => ({
  type: NEWS_EDIT.FAIL,
  error,
});

const newsEditSuccess = () => ({
  type: NEWS_EDIT.SUCCESS,
  message: 'NEWS_INTERACTION.SUCCES_EDIT',
});

const newsDeleteSuccess = () => {
  redirect(ROUTES.ADMIN_NEWS);
};

export const newsEdit = (id, title, description, body, status, createDatetime) => {
  const payload = {
    ...(title ? { title } : null),
    ...(description ? { description } : null),
    ...(body ? { body } : null),
    ...(status ? { status } : null),
    ...(createDatetime ? { createDatetime } : null),
  };

  const API_URL = URLS.NEWS_EDIT(id);

  return (dispatch) =>
    api
      .patch(API_URL, payload)
      .then(() => {
        return dispatch(newsEditSuccess());
      })
      .catch(({ response: { data } }) => dispatch(newsActionFail(data.message)));
};

export const newsDelete = (id) => {
  const API_URL = URLS.NEWS_DELETE(id);

  return (dispatch) =>
    api
      .delete(API_URL)
      .then(() => {
        return newsDeleteSuccess();
      })
      .catch(({ response: { data } }) => dispatch(newsActionFail(data.message)));
};
