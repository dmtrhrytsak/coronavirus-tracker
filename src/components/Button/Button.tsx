import StyledButton from './Button.styled';

type ButtonProps = {
  onClick: Function;
  className: string;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <StyledButton className={className} onClick={() => onClick()}>
      {children}
    </StyledButton>
  );
};
