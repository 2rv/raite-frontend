import { NEWS_LIST_ITEM } from '../constants/fields';

import { getDate } from '.';

export const performNewsListItem = (raw) => ({
  id: raw[NEWS_LIST_ITEM.ID],
  title: raw[NEWS_LIST_ITEM.TITLE],
  description: raw[NEWS_LIST_ITEM.DESCRIPTION],
  createDatetime: getDate(raw[NEWS_LIST_ITEM.CREATE_DATETIME]),
});

export const performNewsList = (rawArr) => rawArr.map((raw) => performNewsListItem(raw));
