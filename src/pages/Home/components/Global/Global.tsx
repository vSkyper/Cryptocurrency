import { useState, memo } from 'react';
import { Grid, Collapse, useMediaQuery, useTheme } from '@mui/material';
import { Cards, Description, Switch } from './components';
import { GlobalProps } from './interface';
import { GlobalContainer, PageTitle, MobileSwitchContainer } from './styled';

function Global(props: GlobalProps) {
  const { globalData } = props;

  const [toggle, setToggle] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <GlobalContainer>
        <Grid container alignItems='center' spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <PageTitle variant='h5'>Global Cryptocurrency Market</PageTitle>
            <Description globalData={globalData} />
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Switch toggle={toggle} setToggle={setToggle} mobile={false} />
          </Grid>
        </Grid>

        <MobileSwitchContainer>
          <Switch toggle={toggle} setToggle={setToggle} mobile />
        </MobileSwitchContainer>
      </GlobalContainer>

      <Collapse in={toggle} timeout={isMobile ? 0 : 'auto'}>
        <Cards toggle={toggle} globalData={globalData} />
      </Collapse>
    </>
  );
}

export default memo(Global);
