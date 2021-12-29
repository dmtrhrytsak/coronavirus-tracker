import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import { CountryFlag } from '../CountryFlag';

const StyledStatistics: any = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 75%;
`;

StyledStatistics.Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 18px;
`;

StyledStatistics.Loader = styled(Loader)`
  position: fixed;
  top: 50%;
  right: 50%;

  transform: translate(-50%, -50%);
`;

StyledStatistics.Flag = styled(CountryFlag)`
  position: fixed;
  right: 15px;
  bottom: 15px;
`;

export default StyledStatistics;
