import React, { useContext } from 'react';
import { Typography, Stack, Divider, Grid, Paper } from '@material-ui/core';
import { AllInclusiveRounded as AllInclusiveIcon } from '@material-ui/icons';
import { StackDataContext } from '../contexts/StackDataContext';

const StackData = () => {
  const { coin } = useContext(StackDataContext);

  return (
    <Paper sx={{ p: 2 }}>
      <Stack
        divider={<Divider orientation='horizontal' flexItem />}
        spacing={2}
      >
        <Grid container justifyContent='space-between'>
          <Typography>Market Capitalization</Typography>
          <Typography>
            {Number(coin.market_data.market_cap.usd).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>24h Trading Volume</Typography>
          <Typography>
            {Number(coin.market_data.total_volume.usd).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>Volume / Market Cap</Typography>
          <Typography>
            {(isFinite(
              Number(
                coin.market_data.total_volume.usd /
                  coin.market_data.market_cap.usd
              )
            )
              ? Number(
                  coin.market_data.total_volume.usd /
                    coin.market_data.market_cap.usd
                )
              : 0
            ).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 8,
            })}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>24h Low / 24h High</Typography>
          <Typography>
            {Number(coin.market_data.low_24h.usd).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 8,
              style: 'currency',
              currency: 'USD',
            })}{' '}
            /{' '}
            {Number(coin.market_data.high_24h.usd).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 8,
              style: 'currency',
              currency: 'USD',
            })}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>Market Cap Rank</Typography>
          <Typography>
            {coin.market_cap_rank == null
              ? 'N/A'
              : `#${Number(coin.market_cap_rank)}`}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>Circulating Supply</Typography>
          <Typography>
            {Number(coin.market_data.circulating_supply).toLocaleString(
              'en-US',
              {
                maximumFractionDigits: 0,
              }
            )}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>Total Supply</Typography>
          <Typography>
            {coin.market_data.total_supply == null ? (
              <AllInclusiveIcon />
            ) : (
              Number(coin.market_data.total_supply).toLocaleString('en-US', {
                maximumFractionDigits: 0,
              })
            )}
          </Typography>
        </Grid>
      </Stack>
    </Paper>
  );
};

export default StackData;
