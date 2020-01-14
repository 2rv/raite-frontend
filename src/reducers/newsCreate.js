import { NEWS_CREATE } from '../actions';

const initialState = {
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS_CREATE.SUCCESS:
      return {
        ...state,
        error: false,
      };

    case NEWS_CREATE.FAIL:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
