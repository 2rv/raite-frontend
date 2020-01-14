import { NAVIGATE } from '../actions';

const initialState = {
  admin: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE.CHANGE_ADMIN:
      return {
        ...state,
        admin: action.adminPath,
      };

    default:
      return state;
  }
};
