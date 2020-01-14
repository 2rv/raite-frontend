import { css } from 'styled-components';
import { sizes } from '.';

export const Clickable = css`
  cursor: pointer;
  transition: opacity ${sizes.transition.default};

  &:hover {
    opacity: ${sizes.opacity.default};
  }
`;
