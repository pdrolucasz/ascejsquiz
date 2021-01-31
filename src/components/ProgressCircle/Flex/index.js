/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { compose, flexbox } from 'styled-system';
import { Box } from '../Box';

const composedHelpers = compose(flexbox);

export const Flex = styled(Box)`
  display: flex;

  @media screen and (max-width: 500px) {
    .counter {
      position: absolute;
    }
  }

  ${composedHelpers}
`;

Flex.defaultProps = {};

export default Flex;
