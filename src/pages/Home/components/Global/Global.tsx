import { useState } from 'react';
import { Grid, Box, Typography, Collapse } from '@mui/material';
import { Cards, Description, Switch } from './components';
import { IGlobalData } from 'interfaces';

interface Props {
  globalData: IGlobalData;
}

export default function Global({ globalData }: Props) {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <Box>
        <Grid container alignItems='center' sx={{ mt: 2, mb: 1 }}>
          <Typography variant='h5'>
            Cryptocurrency Prices by Market Cap
          </Typography>
          <Switch toggle={toggle} setToggle={setToggle} mobile />
        </Grid>
        <Description globalData={globalData} />
      </Box>
      <Switch toggle={toggle} setToggle={setToggle} mobile={false} />
      <Collapse in={toggle}>
        <Cards toggle={toggle} globalData={globalData} />
      </Collapse>
    </>
  );
}
