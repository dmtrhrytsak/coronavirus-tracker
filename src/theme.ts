import { css } from 'styled-components';

const theme = {
  colors: {
    white: '#FFF',
    lightGray: '#E5E5E5',
    black: '#000',
    darkPurple: '#771980',
    purple: '#B27AF7',
    lightPurple: '#CFD8EE',
    red: '#F73A3A',
    gloomyBlue: '#BEDAE8',
    green: '#C0E1CC',
  },

  typography: {
    title3: css`
      font-size: 26px;
    `,
    text1: css`
      font-weight: 600;
    `,
    text3: css`
      font-weight: 200;
    `,
    figure1: css`
      font-size: 32px;
    `,
  },
};

export default theme;
