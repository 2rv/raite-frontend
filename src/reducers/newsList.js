import { NEWS_LIST } from '../actions';
import { getReadyState, getLoadingState, getErrorState } from '../utils/store';
import { performNewsList } from '../api/newsList';

const initialState = {
  newsList: {},
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS_LIST.GET_START:
      return {
        ...state,
        newsList: getLoadingState(action.data),
      };

    case NEWS_LIST.GET_SUCCESS:
      return {
        ...state,
        newsList: getReadyState(performNewsList(action.data)),
      };

    case NEWS_LIST.GET_ERROR:
      return {
        ...state,
        newsList: getErrorState(action.data),
        error: action.error,
      };

    default:
      return state;
  }
};
