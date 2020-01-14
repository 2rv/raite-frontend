import i18n from 'i18next';

const REQUIRED_TEXT_TID = 'VALIDATION.REQUIRED';

export const getError = (tid, values = {}) => i18n.t(tid, values);

export const validator = (values, config = {}) => {
  const errors = {};

  Object.keys(config).forEach((field) => {
    let fieldError;
    config[field].some((rule) => {
      fieldError = rule(values[field], values);

      return !!fieldError;
    });

    errors[field] = fieldError;
  });

  return errors;
};

export const required = (value) => {
  if (!value) {
    return getError(REQUIRED_TEXT_TID);
  }

  return null;
};
