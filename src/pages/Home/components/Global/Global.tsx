import { useState } from 'react';
import { Grid, Box, Typography, Collapse, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Cards, Description, Switch } from './components';
import { GlobalProps } from './interface';

const HeroSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6, 4),
  borderRadius: theme.spacing(4),
  background: `linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 100%
  )`,
  backdropFilter: 'blur(20px)',
  border: `1px solid rgba(255, 255, 255, 0.2)`,
  boxShadow: `
    0 20px 60px rgba(0,0,0,0.4),
    inset 0 1px 0 rgba(255,255,255,0.1)
  `,
  position: 'relative',
  overflow: 'hidden',
  marginBottom: theme.spacing(4),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      ${theme.palette.primary.main}05, 
      ${theme.palette.secondary.main}03, 
      transparent 60%
    )`,
    zIndex: 0,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 3),
  },
}));

export default function Global(props: GlobalProps) {
  const { globalData } = props;

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <HeroSection elevation={0}>
        <Grid container alignItems='center' spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant='h4'
              sx={{
                mb: 3,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                lineHeight: 1.2,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
              }}
            >
              Cryptocurrency Prices by Market Cap
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

        <Box sx={{ mt: 4, display: { xs: 'block', md: 'none' } }}>
          <Switch toggle={toggle} setToggle={setToggle} mobile />
        </Box>
      </HeroSection>

      <Collapse in={toggle}>
        <Cards toggle={toggle} globalData={globalData} />
      </Collapse>
    </>
  );
}
