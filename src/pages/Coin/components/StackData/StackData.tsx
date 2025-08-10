import { Typography, Stack, Divider, Grid, Paper } from '@mui/material';
import { format, formatDistance } from 'date-fns';
import { StackDataProps } from './interface';

export default function StackData(props: StackDataProps) {
  const { marketData } = props;

  return (
    <Paper
      sx={{
        p: 2.5,
        borderRadius: 3,
        bgcolor: 'background.default',
        border: (theme) => `1px solid ${theme.palette.divider}`,
        boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
      }}
    >
      <Stack divider={<Divider orientation='horizontal' />} spacing={2}>
        <Grid
          container
          justifyContent='space-between'
          sx={{
            '&:hover': { backgroundColor: 'action.hover', borderRadius: 2 },
            p: 1,
            transition: 'background-color 120ms ease',
          }}
        >
          <Typography fontWeight={500}>Market Capitalization</Typography>
          <Typography>
            {(marketData.market_cap?.usd || 0).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent='space-between'
          sx={{
            '&:hover': { backgroundColor: 'action.hover', borderRadius: 2 },
            p: 1,
            transition: 'background-color 120ms ease',
          }}
        >
          <Typography fontWeight={500}>24h Trading Volume</Typography>
          <Typography>
            {(marketData.total_volume?.usd || 0).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent='space-between'
          sx={{
            '&:hover': { backgroundColor: 'action.hover', borderRadius: 2 },
            p: 1,
            transition: 'background-color 120ms ease',
          }}
        >
          <Typography fontWeight={500}>Volume / Market Cap</Typography>
          <Typography>
            {(
              (marketData.total_volume?.usd || 0) /
              (marketData.market_cap?.usd || 1)
            ).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 8,
            })}
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent='space-between'
          sx={{
            '&:hover': { backgroundColor: 'action.hover', borderRadius: 2 },
            p: 1,
            transition: 'background-color 120ms ease',
          }}
        >
          <Typography fontWeight={500}>24h Low / 24h High</Typography>
          <Typography>
            {(marketData.low_24h?.usd || 0).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 8,
              style: 'currency',
              currency: 'USD',
            })}{' '}
            /{' '}
            {(marketData.high_24h?.usd || 0).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 8,
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent='space-between'
          sx={{
            '&:hover': { backgroundColor: 'action.hover', borderRadius: 2 },
            p: 1,
            transition: 'background-color 120ms ease',
          }}
        >
          <Typography fontWeight={500}>Market Cap Rank</Typography>
          <Typography>
            {marketData.market_cap_rank
              ? `#${marketData.market_cap_rank}`
              : 'N/A'}
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent='space-between'
          sx={{
            '&:hover': { backgroundColor: 'action.hover', borderRadius: 2 },
            p: 1,
            transition: 'background-color 120ms ease',
          }}
        >
          <Typography fontWeight={500}>Circulating Supply</Typography>
          <Typography>
            {(marketData.circulating_supply || 0).toLocaleString('en-US', {
              maximumFractionDigits: 0,
            })}
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent='space-between'
          sx={{
            '&:hover': { backgroundColor: 'action.hover', borderRadius: 2 },
            p: 1,
            transition: 'background-color 120ms ease',
          }}
        >
          <Typography fontWeight={500}>Total Supply</Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            {(marketData.total_supply || 0).toLocaleString('en-US', {
              maximumFractionDigits: 0,
            })}
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent='space-between'
          sx={{
            '&:hover': { backgroundColor: 'action.hover', borderRadius: 2 },
            p: 1,
            transition: 'background-color 120ms ease',
          }}
        >
          <Typography fontWeight={500}>All-Time High</Typography>
          <Grid>
            <Grid container direction='column'>
              <Typography align='right'>
                {(marketData.ath?.usd || 0).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 8,
                  style: 'currency',
                  currency: 'USD',
                })}{' '}
                <Typography
                  fontWeight='fontWeightLight'
                  component='span'
                  sx={
                    (marketData.ath_change_percentage?.usd || 0) < 0
                      ? { color: 'error.light' }
                      : { color: 'success.light' }
                  }
                >
                  {(
                    (marketData.ath_change_percentage?.usd || 0) / 100
                  ).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: 'percent',
                  })}
                </Typography>
              </Typography>
              <Typography align='right' fontWeight='fontWeightLight'>
                {format(new Date(marketData.ath_date?.usd || 0), 'MMM d, y')} (
                {formatDistance(
                  Date.now(),
                  new Date(marketData.ath_date?.usd || 0)
                )}
                )
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent='space-between'
          sx={{
            '&:hover': { backgroundColor: 'action.hover', borderRadius: 2 },
            p: 1,
            transition: 'background-color 120ms ease',
          }}
        >
          <Typography fontWeight={500}>All-Time Low</Typography>
          <Grid>
            <Grid container direction='column'>
              <Typography align='right'>
                {(marketData.atl?.usd || 0).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 8,
                  style: 'currency',
                  currency: 'USD',
                })}{' '}
                <Typography
                  fontWeight='fontWeightLight'
                  component='span'
                  sx={
                    (marketData.atl_change_percentage?.usd || 0) < 0
                      ? { color: 'error.light' }
                      : { color: 'success.light' }
                  }
                >
                  {(
                    (marketData.atl_change_percentage?.usd || 0) / 100
                  ).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: 'percent',
                  })}
                </Typography>
              </Typography>
              <Typography align='right' fontWeight='fontWeightLight'>
                {format(new Date(marketData.atl_date?.usd || 0), 'MMM d, y')} (
                {formatDistance(
                  Date.now(),
                  new Date(marketData.atl_date?.usd || 0)
                )}
                )
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
}
