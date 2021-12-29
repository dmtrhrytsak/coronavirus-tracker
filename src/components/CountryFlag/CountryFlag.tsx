import { IVirusInfo } from '../../types/VirusInfo';

import StyledCountryFlag from './CountryFlag.styled';

type CountryFlagProps = {
  country: IVirusInfo['country'];
  flag: IVirusInfo['countryInfo']['flag'];
  className?: string;
};

export const CountryFlag: React.FC<CountryFlagProps> = ({
  country,
  flag,
  className,
}) => {
  return (
    <StyledCountryFlag title={country} className={className}>
      <StyledCountryFlag.Image src={flag} alt="Country Flag" />
    </StyledCountryFlag>
  );
};
