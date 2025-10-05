import { useState, memo } from 'react';
import {
  Grid,
  Box,
  Typography,
  Collapse,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Cards, Description, Switch } from './components';
import { GlobalProps } from './interface';

const HeroSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3, 4),
  borderRadius: theme.spacing(3),
  background: 'rgba(64, 156, 255, 0.06)',
  border: '1px solid rgba(64, 156, 255, 0.2)',
  boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
  position: 'relative',
  overflow: 'hidden',
  marginBottom: theme.spacing(3),
  contain: 'layout style paint',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2.5, 3),
  },
}));

function Global(props: GlobalProps) {
  const { globalData } = props;

  const [toggle, setToggle] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <HeroSection elevation={0}>
        <Grid container alignItems='center' spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant='h5'
              sx={{
                mb: 2,
                fontWeight: 700,
                background:
                  'linear-gradient(135deg, #409CFF 0%, #3B82F6 50%, #409CFF 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                lineHeight: 1.2,
                fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.75rem' },
                textShadow: '0 2px 4px rgba(64, 156, 255, 0.3)',
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
      </HeroSection>

      <Collapse in={toggle} timeout={isMobile ? 0 : 'auto'}>
        <Cards toggle={toggle} globalData={globalData} />
      </Collapse>
    </>
  );
}

export default memo(Global);
