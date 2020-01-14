import { validator, required } from './index';
import { LOGIN } from '../constants/fields';

const config = {
  [LOGIN.USERNAME]: [required],
  [LOGIN.PASSWORD]: [required],
};

export const validate = (values) => validator(values, config);
