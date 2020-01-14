import axios from 'axios';
import { setCookie, getBrowserCookie } from './cookie';
import { COOKIE_AUTH } from '../constants';
import ROUTES from '../constants/routes';
import { redirect } from './navigation';

const api = axios.create({
  baseURL: `${process.env.API}`,
  timeout: 10000,
});

export const AUTH_HEADER = 'authorization';
export const setAutorizationHeader = (tokenHash) => {
  const token = `Bearer ${tokenHash}`;

  api.defaults.headers.common[AUTH_HEADER] = token;
};

export const setAutorization = (token) => {
  setAutorizationHeader(token);

  setCookie(COOKIE_AUTH, {
    token,
    isLoggedIn: !!token,
  });
};

const auth = getBrowserCookie(COOKIE_AUTH);
if (auth.token) {
  setAutorizationHeader(auth.token);
}

const onResponseSuccess = (response) => Promise.resolve(response);

const onResponseError = (error) => {
  if (!error) {
    Promise.resolve();
  }

  const {
    response: { status },
  } = error;

  if (status === 401) {
    setAutorizationHeader(null);
    redirect(ROUTES.LOGIN);

    error.response.data.message = 'SIGNATURE_IS_BAD';
  }

  return Promise.reject(error);
};

api.interceptors.response.use(onResponseSuccess, onResponseError);

export default api;
