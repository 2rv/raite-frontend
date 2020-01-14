import { validator, required } from './index';
import { NEWS } from '../constants/fields';

const config = {
  [NEWS.TITLE]: [required],
  [NEWS.DESCRIPTION]: [required],
  [NEWS.BODY]: [required],
  [NEWS.STATUS]: [required],
};

export const validate = (values) => validator(values, config);
