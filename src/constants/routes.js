export default {
  HOME: '/',
  LOGIN: '/login',

  ADMIN: '/admin',
  ADMIN_NEWS: '/admin/news',
  ADMIN_NEWS_CREATE: '/admin/news/create',
  ADMIN_NEWS_VIEW: (id) => `/admin/news/${id}`,
  ADMIN_NEWS_EDIT: (id) => `/admin/news/${id}/edit`,
  ADMIN_GDS: '/admin/gds',
};
