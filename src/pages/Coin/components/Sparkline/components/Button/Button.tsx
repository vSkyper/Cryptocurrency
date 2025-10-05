import { useCallback } from 'react';
import { ButtonProps } from './interface';
import { StyledButton } from './styled';

export default function ButtonComponent(props: ButtonProps) {
  const { days, daysFormatted, setDays, actualDays, mobileDisappear } = props;

  const handleClicked = useCallback(() => {
    setDays(days);
  }, [days, setDays]);

  const isActive = actualDays === days;

  return (
    <StyledButton
      className={isActive ? 'active' : ''}
      size='small'
      sx={{
        display: {
          xs: mobileDisappear ? 'none' : 'inline-flex',
          sm: 'inline-flex',
        },
      }}
      onClick={handleClicked}
    >
      {daysFormatted}
    </StyledButton>
  );
}
