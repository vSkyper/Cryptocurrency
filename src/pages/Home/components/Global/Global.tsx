import { useState, memo } from 'react';
import { Grid, Box } from '@mui/material';
import { Cards, Description, Switch } from './components';
import { GlobalProps } from './interface';
import { GlobalContainer, PageTitle, MobileSwitchContainer } from './styled';

function Global(props: GlobalProps) {
  const { globalData } = props;

  const [toggle, setToggle] = useState<boolean>(false);

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

      <Box
        sx={{
          maxHeight: toggle ? '1000px' : '0px',
          overflow: 'hidden',
          transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
          transform: 'translateZ(0)',
          willChange: 'max-height, opacity',
          opacity: toggle ? 1 : 0,
        }}
      >
        <Cards toggle={toggle} globalData={globalData} />
      </Box>
    </>
  );
}

export default memo(Global);
