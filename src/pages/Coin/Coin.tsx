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
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
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
          py: 4,
          px: { xs: 2, sm: 3 },
        }}
      >
        <Fade in timeout={600}>
          <HeroSection sx={{ mt: 4 }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'center', sm: 'flex-start' }}
              spacing={3}
            >
              <Avatar
                src={data.image?.large}
                alt={data.name}
                sx={{
                  width: { xs: 80, sm: 96 },
                  height: { xs: 80, sm: 96 },
                  boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                  border: (theme) =>
                    `3px solid ${theme.palette.background.paper}`,
                  bgcolor: 'transparent',
                  filter: 'brightness(1.1) contrast(1.1)',
                  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'scale(1.05) translateY(-2px)',
                    boxShadow: '0 16px 50px rgba(0,0,0,0.5)',
                  },
                }}
              />

              <Stack
                spacing={2}
                alignItems={{ xs: 'center', sm: 'flex-start' }}
              >
                <Typography
                  variant='h3'
                  component='h1'
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    background: (theme) => `linear-gradient(135deg, 
                      ${theme.palette.text.primary}, 
                      ${theme.palette.primary.main}aa
                    )`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    textAlign: { xs: 'center', sm: 'left' },
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                  }}
                >
                  {data.name}
                </Typography>

                <Stack
                  direction='row'
                  alignItems='center'
                  spacing={2}
                  flexWrap='wrap'
                  justifyContent={{ xs: 'center', sm: 'flex-start' }}
                >
                  <Chip
                    size='medium'
                    label={data.symbol?.toUpperCase()}
                    sx={{
                      fontWeight: 700,
                      fontSize: '1rem',
                      borderRadius: '16px',
                      background: (theme) => `linear-gradient(135deg, 
                        ${theme.palette.background.paper}ee, 
                        ${theme.palette.background.default}cc
                      )`,
                      backdropFilter: 'blur(10px)',
                      border: (theme) => `1px solid ${theme.palette.divider}60`,
                      color: 'text.primary',
                      letterSpacing: 0.5,
                      height: 40,
                      px: 2,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                      transition: 'all 250ms ease',
                      '&:hover': {
                        transform: 'translateY(-1px)',
                        boxShadow: '0 6px 25px rgba(0,0,0,0.2)',
                      },
                    }}
                  />

                  {data.market_cap_rank && (
                    <Chip
                      size='medium'
                      label={`Rank #${data.market_cap_rank}`}
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        borderRadius: '16px',
                        background: (theme) => `linear-gradient(135deg, 
                          ${theme.palette.primary.main}25, 
                          ${theme.palette.secondary.main}20
                        )`,
                        backdropFilter: 'blur(10px)',
                        border: (theme) =>
                          `1px solid ${theme.palette.primary.main}40`,
                        color: 'primary.main',
                        letterSpacing: 0.3,
                        height: 40,
                        px: 2,
                        boxShadow: (theme) =>
                          `0 4px 20px ${theme.palette.primary.main}30`,
                        transition: 'all 250ms ease',
                        '&:hover': {
                          transform: 'translateY(-1px)',
                          boxShadow: (theme) =>
                            `0 6px 25px ${theme.palette.primary.main}40`,
                          background: (theme) => `linear-gradient(135deg, 
                            ${theme.palette.primary.main}35, 
                            ${theme.palette.secondary.main}30
                          )`,
                        },
                      }}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>
          </HeroSection>
        </Fade>

        <Grid container spacing={4}>
          {/* Main Chart Section */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Slide direction='up' in timeout={800}>
              <Box>
                <Sparkline id={id} />
              </Box>
            </Slide>
          </Grid>

          {/* Price Card Section */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Slide direction='left' in timeout={1000}>
              <Box>
                <PriceCard data={data} />
              </Box>
            </Slide>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Market Data Section */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Slide direction='up' in timeout={1200}>
              <Box>
                <StackData marketData={data.market_data} />
              </Box>
            </Slide>
          </Grid>

          {/* Exchange and Links Section */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={3}>
              <Slide direction='left' in timeout={1400}>
                <Box>
                  <Exchange id={id} symbol={data.symbol} />
                </Box>
              </Slide>

              <Slide direction='left' in timeout={1600}>
                <Box>
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
