import { useState } from 'react';

import { IVirusInfo } from '../../types/VirusInfo';

import StyledSearchBar from './SearchBar.styled';

type SearchBarProps = {
  changeCountry: (newCountry: IVirusInfo['country']) => void;
  className?: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  changeCountry,
  className,
}) => {
  const [countryQuery, setCountryQuery] = useState('');

  return (
    <StyledSearchBar className={className}>
      <StyledSearchBar.Input
        type="search"
        value={countryQuery}
        placeholder="Country"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCountryQuery(e.target.value)
        }
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            changeCountry(countryQuery.trim().toLowerCase());
          }
        }}
      />
      <StyledSearchBar.Button
        onClick={() => changeCountry(countryQuery.trim().toLowerCase())}
      >
        Search
      </StyledSearchBar.Button>
    </StyledSearchBar>
  );
};
