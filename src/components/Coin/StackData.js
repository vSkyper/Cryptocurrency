import React, { useState, useEffect, useContext } from 'react';
import { Typography, Stack, Divider, Grid, Paper } from '@material-ui/core';
import { AllInclusiveRounded as AllInclusiveIcon } from '@material-ui/icons';
import { format, formatDistance } from 'date-fns';
import axios from 'axios';
import { StackDataContext } from '../../contexts/StackDataContext';

const StackData = () => {
  const [highestPrice, setHighestPrice] = useState([0, 0]);
  const [lowestPrice, setLowestPrice] = useState([0, 0]);
  const { id, coin } = useContext(StackDataContext);

  useEffect(() => {
    let source = axios.CancelToken.source();
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=max`,
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        let min = +Infinity;
        let max = -Infinity;
        let minDate, maxDate;
        res.data.prices.forEach((data) => {
          min = Math.min(min, data[1]);
          if (min === data[1]) {
            minDate = data[0];
          }
          max = Math.max(max, data[1]);
          if (max === data[1]) {
            maxDate = data[0];
          }
        });
        setHighestPrice([
          max,
          maxDate,
        ]);
        setLowestPrice([
          min,
          minDate,
        ]);
      })
      .catch((error) => console.log(error));
    return () => {
      setHighestPrice([0, 0]);
      setLowestPrice([0, 0]);
      source.cancel();
    };
  }, [id]);

  return (
    <Paper sx={{ p: 2 }}>
      <Stack
        divider={<Divider orientation='horizontal' flexItem />}
        spacing={2}
      >
        <Grid container justifyContent='space-between'>
          <Typography>Market Capitalization</Typography>
          <Typography>
            {Number(coin.market_cap.usd).toLocaleString('en-US', {
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
            {Number(coin.total_volume.usd).toLocaleString('en-US', {
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
                coin.total_volume.usd /
                  coin.market_cap.usd
              )
            )
              ? Number(
                  coin.total_volume.usd /
                    coin.market_cap.usd
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
            {Number(coin.low_24h.usd).toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 8,
              style: 'currency',
              currency: 'USD',
            })}{' '}
            /{' '}
            {Number(coin.high_24h.usd).toLocaleString('en-US', {
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
            {Number(coin.circulating_supply).toLocaleString(
              'en-US',
              {
                maximumFractionDigits: 0,
              }
            )}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>Total Supply</Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            {coin.total_supply == null ? (
              <AllInclusiveIcon />
            ) : (
              Number(coin.total_supply).toLocaleString('en-US', {
                maximumFractionDigits: 0,
              })
            )}
          </Typography>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>All-Time High</Typography>
          <Grid item>
            <Grid container direction='column'>
              <Typography align='right'>
                {Number(highestPrice[0]).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 8,
                  style: 'currency',
                  currency: 'USD',
                })}
              </Typography>
              <Typography align='right' fontWeight='fontWeightLight'>
                {format(new Date(Number(highestPrice[1])), 'MMM d, y')} (
                {formatDistance(
                  Date.now(),
                  new Date(Number(highestPrice[1]))
                )}
                )
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent='space-between'>
          <Typography>All-Time Low</Typography>
          <Grid item>
            <Grid container direction='column'>
              <Typography align='right'>
                {Number(lowestPrice[0]).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 8,
                  style: 'currency',
                  currency: 'USD',
                })}
              </Typography>
              <Typography align='right' fontWeight='fontWeightLight'>
                {format(new Date(Number(lowestPrice[1])), 'MMM d, y')} (
                {formatDistance(Date.now(), new Date(Number(lowestPrice[1])))})
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
};

export default StackData;
