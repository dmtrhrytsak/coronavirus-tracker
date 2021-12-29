import styled from 'styled-components';

import { Button } from '../Button/Button';

const StyledSearchBar: any = styled.div`
  display: flex;
  gap: 24px;
  width: 75%;
  padding: 15px;
  border-radius: 12px;

  background-color: #fff;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

StyledSearchBar.Input = styled.input`
  flex: 1 1 auto;
  padding: 24px 16px;
  border: 2px solid transparent;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.lightGray};

  &:focus {
    outline: none;

    border-color: #ddd;
  }
`;

StyledSearchBar.Button = styled(Button)`
  @media (max-width: 460px) {
    padding: 20px 20px;
  }
`;

export default StyledSearchBar;
