import { Container } from '@mui/material';
import { SearchBar, Title, Tooltips } from './components';
import {
  LeftSection,
  NavContainer,
  RightSection,
  SearchSection,
  StyledAppBar,
  StyledToolbar,
  ToolbarSpacer,
} from './styled';

export default function Navbar() {
  return (
    <NavContainer>
      <StyledAppBar position='fixed'>
        <Container maxWidth='xl' disableGutters>
          <StyledToolbar>
            <LeftSection>
              <Title />
            </LeftSection>

            <SearchSection>
              <SearchBar />
            </SearchSection>

            <RightSection>
              <Tooltips />
            </RightSection>
          </StyledToolbar>
        </Container>
      </StyledAppBar>
      <ToolbarSpacer />
    </NavContainer>
  );
}
