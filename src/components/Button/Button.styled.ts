import styled from 'styled-components';
import { lighten } from 'polished';

const StyledButton = styled.button`
  padding: 20px 50px;
  border: 4px solid transparent;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.lightGray};

  transition: background-color 0.3s ease;

  ${({ theme }) => theme.typography.text1}

  &:hover {
    background-color: ${({ theme }) => lighten(0.09, theme.colors.black)};
  }
`;

export default StyledButton;
