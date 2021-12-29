import { useSearchParams } from 'react-router-dom';

import { Statistics } from './components/Statistics';
import { IVirusInfo } from './types/VirusInfo';

import StyledApp from './App.styled';
import Wrapper from './components/Utils/Wrapper.styled';

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const country = searchParams.get('country') || '';

  const changeCountry = (newCountry: IVirusInfo['country']) => {
    if (newCountry) {
      setSearchParams({ country: newCountry });
    } else {
      setSearchParams({});
    }
  };

  return (
    <StyledApp>
      <Wrapper>
        <StyledApp.SearchBar changeCountry={changeCountry} />
        {country && <Statistics country={country} />}
      </Wrapper>
    </StyledApp>
  );
};

export default App;
