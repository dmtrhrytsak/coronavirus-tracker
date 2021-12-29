import { getVirusStatisticsByCountry } from '../../api/coronavirus';
import { useFetch } from '../../hooks/useFetch';

import { IVirusInfo } from '../../types/VirusInfo';
import { VirusInfo } from '../VirusInfo';

import StyledStatistics from './Statistics.styled';

type StatisticsProps = {
  country: IVirusInfo['country'];
};

export const Statistics: React.FC<StatisticsProps> = ({ country }) => {
  const virusInfo = useFetch<IVirusInfo>(getVirusStatisticsByCountry, country);

  if (virusInfo.isLoading) {
    return (
      <StyledStatistics.Loader
        type="ThreeDots"
        color="#000"
        height={50}
        width={50}
      />
    );
  }

  if (!virusInfo.data || virusInfo.error) {
    return <p>No such country</p>;
  }

  return (
    <StyledStatistics>
      <StyledStatistics.Row>
        <VirusInfo
          title="New Cases"
          figure={virusInfo.data.todayCases}
          newCases
        />

        <VirusInfo
          title="Total Deaths"
          figure={virusInfo.data.deaths}
          totalDeaths
        />
      </StyledStatistics.Row>

      <StyledStatistics.Row>
        <VirusInfo
          title="Total Tests"
          figure={virusInfo.data.tests}
          totalTest
        />

        <VirusInfo
          title="Critical Cases"
          figure={virusInfo.data.critical}
          criticalCases
        />

        <VirusInfo
          title="Recovered"
          figure={virusInfo.data.recovered}
          recovered
        />
      </StyledStatistics.Row>

      <StyledStatistics.Flag
        country={virusInfo.data.country}
        flag={virusInfo.data.countryInfo.flag}
      />
    </StyledStatistics>
  );
};
