import { NEWS_VIEW } from '../constants/fields';

import { getDate, getNewsStatus } from '.';

export const performNewsView = (raw) => ({
  id: raw[NEWS_VIEW.ID],
  title: raw[NEWS_VIEW.TITLE],
  description: raw[NEWS_VIEW.DESCRIPTION],
  body: raw[NEWS_VIEW.BODY],
  createDatetime: getDate(raw[NEWS_VIEW.CREATE_DATETIME]),
  status: getNewsStatus(raw[NEWS_VIEW.STATUS]),
});
