import styled, { css } from 'styled-components';

export type StyledVirusInfoProps = {
  newCases?: boolean;
  totalDeaths?: boolean;
  totalTest?: boolean;
  criticalCases?: boolean;
  recovered?: boolean;
};

const StyledVirusInfo: any = styled.div<StyledVirusInfoProps>`
  padding: 50px;
  border-radius: 6px;

  ${(props) =>
    props.newCases &&
    css`
      background-color: ${({ theme }) => theme.colors.lightPurple};
    `}

  ${(props) =>
    props.totalDeaths &&
    css`
      background-color: ${({ theme }) => theme.colors.red};
    `}

  ${(props) =>
    props.totalTest &&
    css`
      background-color: ${({ theme }) => theme.colors.gloomyBlue};
    `}

  ${(props) =>
    props.criticalCases &&
    css`
      background-color: ${({ theme }) => theme.colors.purple};
    `}

  ${(props) =>
    props.recovered &&
    css`
      background-color: ${({ theme }) => theme.colors.green};
    `}
`;

StyledVirusInfo.Category = styled.h3`
  margin-bottom: 6px;

  ${({ theme }) => theme.typography.title3};
`;

StyledVirusInfo.Latest = styled.p`
  margin-bottom: 24px;

  ${({ theme }) => theme.typography.text3}
`;

StyledVirusInfo.Figure = styled.span`
  display: inline-block;
  padding: 12px 18px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.typography.figure1}
`;

export default StyledVirusInfo;
