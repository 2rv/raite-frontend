import { NAVIGATE } from '.';

export const adminNavigatePath = (path) => {
  return (dispatch) =>
    dispatch({
      type: NAVIGATE.CHANGE_ADMIN,
      adminPath: path,
    });
};
