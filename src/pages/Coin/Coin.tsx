import {
  Container,
  Typography,
  Grid,
  Chip,
  Stack,
  Avatar,
  Box,
  Fade,
  Slide,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { HeroSection, GradientBackground } from './styled';
import { Exchange, Links, PriceCard, Sparkline, StackData } from './components';
import { ErrorModal, LoadingModal } from 'components';
import { ICoin } from 'interfaces';
import useFetch from 'hooks/useFetch';

export default function Coin() {
  const { id } = useParams();

  const { data, error } = useFetch<ICoin>(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&x_cg_demo_api_key=CG-Gq8TjhLV8eipyhqmcRtXoZee`
  );

  if (!id || error) return <ErrorModal />;

  if (!data) return <LoadingModal />;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <GradientBackground />
      <Container
        maxWidth='xl'
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 2, sm: 4 },
          px: { xs: 1, sm: 2 },
          transform: 'translateZ(0)', // Force hardware acceleration
          willChange: 'auto', // Optimize for animations
          contain: 'layout style', // CSS containment
          isolation: 'isolate', // Create new stacking context
        }}
      >
        <Fade in timeout={600}>
          <HeroSection>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'center', sm: 'center' }}
              spacing={{ xs: 2.5, sm: 3, md: 4 }}
              sx={{ position: 'relative', zIndex: 1 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Avatar
                  src={data.image?.large}
                  alt={data.name}
                  sx={{
                    width: { xs: 64, sm: 80, md: 88 },
                    height: { xs: 64, sm: 80, md: 88 },
                    boxShadow:
                      '0 12px 40px rgba(0,0,0,0.4), 0 4px 16px rgba(208, 188, 255, 0.2)',
                    border: '2px solid rgba(208, 188, 255, 0.3)',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    filter: 'brightness(1.1) contrast(1.1)',
                    transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -4,
                      left: -4,
                      right: -4,
                      bottom: -4,
                      background:
                        'linear-gradient(45deg, rgba(208, 188, 255, 0.3), rgba(204, 194, 220, 0.2))',
                      borderRadius: '50%',
                      zIndex: -1,
                      opacity: 0,
                      transition: 'opacity 400ms ease',
                    },
                    '&:hover': {
                      transform: 'scale(1.08) translateY(-4px) rotateY(5deg)',
                      boxShadow:
                        '0 20px 60px rgba(0,0,0,0.5), 0 8px 24px rgba(208, 188, 255, 0.3)',
                      border: '2px solid rgba(208, 188, 255, 0.5)',
                      '&::before': {
                        opacity: 1,
                      },
                    },
                  }}
                />
              </Box>

              <Stack
                spacing={{ xs: 1.5, sm: 2 }}
                alignItems={{ xs: 'center', sm: 'flex-start' }}
                sx={{ flex: 1, minWidth: 0 }}
              >
                <Typography
                  variant='h4'
                  component='h1'
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.5rem' },
                    background:
                      'linear-gradient(135deg, #D0BCFF 0%, #CCC2DC 40%, #D0BCFF 80%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    textAlign: { xs: 'center', sm: 'left' },
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    textShadow: '0 4px 8px rgba(208, 188, 255, 0.3)',
                    transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #D0BCFF, #CCC2DC)',
                      borderRadius: '2px',
                      transition: 'width 500ms cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                    '&:hover': {
                      backgroundPosition: '100% 0',
                      transform: 'translateY(-2px)',
                      filter:
                        'drop-shadow(0 6px 12px rgba(208, 188, 255, 0.4))',
                      '&::after': {
                        width: { xs: '100%', sm: '60%' },
                      },
                    },
                  }}
                >
                  {data.name}
                </Typography>

                <Stack
                  direction='row'
                  alignItems='center'
                  spacing={{ xs: 1.5, sm: 2 }}
                  flexWrap='wrap'
                  justifyContent={{ xs: 'center', sm: 'flex-start' }}
                  sx={{ gap: 1 }}
                >
                  <Chip
                    size='medium'
                    label={data.symbol?.toUpperCase()}
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.85rem' },
                      borderRadius: '16px',
                      background:
                        'linear-gradient(135deg, rgba(208, 188, 255, 0.2) 0%, rgba(204, 194, 220, 0.15) 100%)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(208, 188, 255, 0.3)',
                      color: '#D0BCFF',
                      letterSpacing: '0.5px',
                      height: { xs: 32, sm: 40, md: 36 },
                      px: { xs: 1.5, sm: 2, md: 1.8 },
                      boxShadow:
                        '0 4px 20px rgba(208, 188, 255, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background:
                          'linear-gradient(90deg, transparent, rgba(208, 188, 255, 0.3), transparent)',
                        transition: 'left 500ms ease',
                      },
                      '&:hover': {
                        transform: 'translateY(-2px) scale(1.05)',
                        boxShadow:
                          '0 8px 30px rgba(208, 188, 255, 0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
                        background:
                          'linear-gradient(135deg, rgba(208, 188, 255, 0.3) 0%, rgba(204, 194, 220, 0.2) 100%)',
                        border: '1px solid rgba(208, 188, 255, 0.5)',
                        '&::before': {
                          left: '100%',
                        },
                      },
                    }}
                  />

                  {data.market_cap_rank && (
                    <Chip
                      size='medium'
                      label={`#${data.market_cap_rank}`}
                      sx={{
                        fontWeight: 600,
                        fontSize: {
                          xs: '0.75rem',
                          sm: '0.8rem',
                          md: '0.75rem',
                        },
                        borderRadius: '16px',
                        background:
                          'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        letterSpacing: '0.3px',
                        height: { xs: 28, sm: 32, md: 30 },
                        px: { xs: 1.2, sm: 1.5, md: 1.3 },
                        boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-1px)',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                          background:
                            'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                        },
                      }}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>
          </HeroSection>
        </Fade>

        <Grid container spacing={4} sx={{ transform: 'translateZ(0)' }}>
          {/* Main Chart Section */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Slide direction='up' in timeout={800}>
              <Box sx={{ transform: 'translateZ(0)' }}>
                <Sparkline id={id} />
              </Box>
            </Slide>
          </Grid>

          {/* Price Card Section */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Slide direction='up' in timeout={1000}>
              <Box sx={{ transform: 'translateZ(0)' }}>
                <PriceCard data={data} />
              </Box>
            </Slide>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 2, transform: 'translateZ(0)' }}>
          {/* Market Data Section */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Slide direction='up' in timeout={1200}>
              <Box sx={{ transform: 'translateZ(0)' }}>
                <StackData marketData={data.market_data} />
              </Box>
            </Slide>
          </Grid>

          {/* Exchange and Links Section */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={2}>
              <Slide direction='up' in timeout={1400}>
                <Box sx={{ transform: 'translateZ(0)' }}>
                  <Exchange id={id} symbol={data.symbol} />
                </Box>
              </Slide>

              <Slide direction='up' in timeout={1600}>
                <Box sx={{ transform: 'translateZ(0)' }}>
                  <Links data={data} />
                </Box>
              </Slide>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
