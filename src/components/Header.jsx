import styled from 'styled-components';

import { Container } from './Container';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
  padding: 2rem 0;
`;

export const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <ThemeSwitcher />
      </Container>
    </HeaderEl>
  );
};
