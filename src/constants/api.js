export default {
  AUTH_LOGIN: '/auth/login',
  NEWS_LIST: '/news',
  NEWS_LIST_ALL: '/news/all',
  NEWS_VIEW_ALL: (id) => `/news/${id}/all`,
  NEWS_EDIT: (id) => `/news/${id}`,
  NEWS_DELETE: (id) => `/news/${id}`,
  NEWS_CREATE: '/news',
};
