import styled from 'styled-components';

const StyledCountryFlag: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  padding: 10px 30px;
  border-radius: 5px;

  background-color: white;
`;

StyledCountryFlag.Image = styled.img`
  width: 100%;
`;

export default StyledCountryFlag;
