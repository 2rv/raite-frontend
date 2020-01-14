import { NEWS_EDIT } from '../actions';

const initialState = {
  error: null,
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS_EDIT.SUCCESS:
      return {
        ...state,
        message: action.message,
      };

    case NEWS_EDIT.FAIL:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
