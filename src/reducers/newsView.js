import { NEWS_VIEW } from '../actions';
import { getReadyState, getLoadingState, getErrorState } from '../utils/store';
import { performNewsView } from '../api/newsView';

const initialState = {
  news: {},
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS_VIEW.GET_START:
      return {
        ...state,
        news: getLoadingState(action.data),
      };

    case NEWS_VIEW.GET_SUCCESS:
      return {
        ...state,
        news: getReadyState(performNewsView(action.data)),
      };

    case NEWS_VIEW.GET_ERROR:
      return {
        ...state,
        news: getErrorState(action.data),
        error: action.error,
      };

    default:
      return state;
  }
};
