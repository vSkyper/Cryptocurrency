import { useState } from 'react';
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
  background: `linear-gradient(135deg, 
    rgba(208, 188, 255, 0.08) 0%, 
    rgba(204, 194, 220, 0.04) 100%
  )`,
  backdropFilter: 'blur(24px)',
  border: '1px solid rgba(208, 188, 255, 0.2)',
  boxShadow: `
    0 8px 32px rgba(0,0,0,0.3),
    0 4px 16px rgba(208, 188, 255, 0.1),
    inset 0 1px 0 rgba(255,255,255,0.08)
  `,
  position: 'relative',
  overflow: 'hidden',
  marginBottom: theme.spacing(3),
  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      rgba(208, 188, 255, 0.05), 
      rgba(204, 194, 220, 0.03), 
      transparent 50%
    )`,
    zIndex: 0,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2.5, 3),
  },
}));

export default function Global(props: GlobalProps) {
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
                  'linear-gradient(135deg, #D0BCFF 0%, #CCC2DC 50%, #D0BCFF 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                lineHeight: 1.2,
                fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.75rem' },
                textShadow: '0 2px 4px rgba(208, 188, 255, 0.3)',
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
