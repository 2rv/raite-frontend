import { LOGIN } from '../actions';

const initialState = {
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.SUCCESS:
      return {
        ...state,
      };

    case LOGIN.FAIL:
      return {
        ...state,
        error: action.message,
      };

    default:
      return state;
  }
};
