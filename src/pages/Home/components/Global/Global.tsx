import { useState, memo } from 'react';
import {
  Grid,
  Box,
  Typography,
  Collapse,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Cards, Description, Switch } from './components';
import { GlobalProps } from './interface';

function Global(props: GlobalProps) {
  const { globalData } = props;

  const [toggle, setToggle] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Grid container alignItems='center' spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant='h5'
              sx={{
                mb: 2,
                fontWeight: 700,
                color: 'text.primary',
                lineHeight: 1.2,
                fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.75rem' },
                letterSpacing: '-0.01em',
              }}
            >
              Global Cryptocurrency Market
            </Typography>
            <Description globalData={globalData} />
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Switch toggle={toggle} setToggle={setToggle} mobile={false} />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, display: { xs: 'block', md: 'none' } }}>
          <Switch toggle={toggle} setToggle={setToggle} mobile />
        </Box>
      </Box>

      <Collapse in={toggle} timeout={isMobile ? 0 : 'auto'}>
        <Cards toggle={toggle} globalData={globalData} />
      </Collapse>
    </>
  );
}

export default memo(Global);
