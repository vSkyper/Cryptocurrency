import React, { useState, useEffect, useContext } from 'react';
import {
  Grid,
  Paper,
  Button,
  Box,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  ResponsiveContainer,
  Area,
} from 'recharts';
import { format } from 'date-fns';
import axios from 'axios';
import { styled } from '@material-ui/core/styles';
import { SparklineContext } from '../contexts/SparklineContext';

const Buttons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  gap: 10,
  padding: theme.spacing(1, 0),
}));

const Chart = styled(Paper)(({ theme }) => ({
  height: 295,
  padding: theme.spacing(2, 1, 1, 1),
  [theme.breakpoints.up('sm')]: {
    height: 495,
    padding: theme.spacing(3, 1.5, 1.5, 2),
  },
  color: 'black',
}));

const Sparkline = () => {
  const [sparkline, setSparkline] = useState([]);
  const [days, setDays] = useState('7');
  const { id } = useContext(SparklineContext);

  useEffect(() => {
    let source = axios.CancelToken.source();
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`,
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setSparkline(
          res.data.prices.map((data) => ({
            date: format(new Date(data[0]), 'MMM d y, hh:mm:ss'),
            value: data[1],
          }))
        );
      })
      .catch((error) => console.log(error));
    return () => {
      setSparkline([]);
      source.cancel();
    };
  }, [id, days]);

  return (
    <Grid item xs={12} lg={7}>
      <Buttons>
        <Button
          color={days === '1' ? 'primary' : 'inherit'}
          onClick={() => setDays('1')}
        >
          1D
        </Button>
        <Button
          color={days === '7' ? 'primary' : 'inherit'}
          onClick={() => setDays('7')}
        >
          1W
        </Button>
        <Button
          color={days === '30' ? 'primary' : 'inherit'}
          onClick={() => setDays('30')}
        >
          1M
        </Button>
        <Button
          color={days === '90' ? 'primary' : 'inherit'}
          sx={{ display: { xs: 'none', sm: 'block' } }}
          onClick={() => setDays('90')}
        >
          3M
        </Button>
        <Button
          color={days === '180' ? 'primary' : 'inherit'}
          onClick={() => setDays('180')}
        >
          6M
        </Button>
        <Button
          color={days === '365' ? 'primary' : 'inherit'}
          onClick={() => setDays('365')}
        >
          1Y
        </Button>
        <Button
          color={days === 'max' ? 'primary' : 'inherit'}
          sx={{ display: { xs: 'none', sm: 'block' } }}
          onClick={() => setDays('max')}
        >
          MAX
        </Button>
      </Buttons>
      <Chart>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={sparkline.length === 0}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
        {sparkline.length > 0 && (
          <ResponsiveContainer>
            <AreaChart data={sparkline}>
              <defs>
                <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='#648dae' stopOpacity={0.4} />
                  <stop offset='75%' stopColor='#648dae' stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <Area dataKey='value' stroke='#648dae' fill='url(#color)' />
              <XAxis
                dataKey='date'
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => {
                  if (days === '1') {
                    return format(new Date(value), '| hh:mm |');
                  } else if (days === 'max') {
                    return format(new Date(value), '| y MMM |');
                  } else {
                    return format(new Date(value), '| MMM, d |');
                  }
                }}
              />
              <YAxis
                dataKey='value'
                domain={['auto', 'auto']}
                axisLine={false}
                tickLine={false}
                tickCount={8}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip />
              <CartesianGrid opacity={0.05} vertical={false} />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </Chart>
    </Grid>
  );
};

export default Sparkline;
