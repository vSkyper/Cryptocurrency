import { Tooltip } from '@mui/material';
import { TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import {
  TitleContainer,
  LogoButton,
  DesktopTitle,
  StyledLink,
  MobileTitle,
  MobileLink,
} from './styled';

export default function Title() {
  return (
    <TitleContainer>
      <Tooltip title='Go to Homepage' arrow placement='bottom'>
        <LogoButton to='/'>
          <TrendingUpIcon />
        </LogoButton>
      </Tooltip>

      <DesktopTitle variant='h6' noWrap>
        <StyledLink to='/'>Cryptocurrency</StyledLink>
      </DesktopTitle>

      {/* Mobile title */}
      <MobileTitle variant='h6' noWrap>
        <MobileLink to='/'>Crypto</MobileLink>
      </MobileTitle>
    </TitleContainer>
  );
}
