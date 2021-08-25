import { useState, useContext, Fragment } from 'react';
import {
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
import useFetch from '../../useFetch';
import { styled } from '@material-ui/core/styles';
import { Context } from '../../Context';

const Buttons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  padding: theme.spacing(1, 0),
}));

const Chart = styled(Paper)(({ theme }) => ({
  height: 250,
  padding: theme.spacing(2, 1, 1, 0.8),
  [theme.breakpoints.up('sm')]: {
    height: 416,
    padding: theme.spacing(3, 1.5, 1.5, 2),
  },
  color: 'black',
}));

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Paper sx={{ opacity: 0.6, padding: 2 }}>
        <Box>{format(new Date(label), 'eeee, d MMM, yyyy')}</Box>
        <Box>
          {Number(payload[0].value).toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 8,
            style: 'currency',
            currency: 'USD',
          })}
        </Box>
      </Paper>
    );
  }

  return null;
};

const Sparkline = () => {
  const [days, setDays] = useState('7');
  const { id } = useContext(Context);

  const { data: sparklineRaw, loading: sparklineLoading } = useFetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
  );

  const sparkline = sparklineRaw?.prices.map((data) => ({
    date: format(new Date(data[0]), 'MMM d y, hh:mm:ss a'),
    value: data[1],
  }));

  return (
    <Fragment>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={sparklineLoading}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
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
        {sparkline && (
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
                    return format(new Date(value), '| hh:mm a |');
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
              <Tooltip content={<CustomTooltip />} />
              <CartesianGrid opacity={0.05} vertical={false} />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </Chart>
    </Fragment>
  );
};

export default Sparkline;
