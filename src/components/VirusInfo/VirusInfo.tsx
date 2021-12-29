import StyledVirusInfo, { StyledVirusInfoProps } from './VirusInfo.styled';

type VirusInfoProps = {
  title: string;
  figure: number;
} & StyledVirusInfoProps;

export const VirusInfo: React.FC<VirusInfoProps> = ({
  title,
  figure,
  ...props
}) => {
  return (
    <StyledVirusInfo {...props}>
      <StyledVirusInfo.Category>{title}</StyledVirusInfo.Category>

      <div>
        <StyledVirusInfo.Latest>Last 24 Hours</StyledVirusInfo.Latest>
        <StyledVirusInfo.Figure>{figure.toLocaleString()}</StyledVirusInfo.Figure>
      </div>
    </StyledVirusInfo>
  );
};
