import lang from 'i18next';

export const getDate = (raw) => new Date(raw).toLocaleString();

export const getNewsStatus = (status) => lang.t(`STATIC.NEWS_STATUS.${status}`);
