import Router from 'next/router';

export const redirect = (path, config = {}, asPath = path) => {
  const { local = true } = config;

  if (local) {
    Router.push(path, asPath, { shallow: true });
  } else {
    window.location.href = path;
  }
};

export const getQuery = (id) => {
  return Router.query[id] || null;
};
