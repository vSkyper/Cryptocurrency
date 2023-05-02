import { useState } from 'react';
import {
  Grid,
  Backdrop,
  CircularProgress,
  Dialog,
  Alert,
} from '@mui/material';
import { format } from 'date-fns';
import { ISparkline } from '../../../../interfaces';
import useFetch from '../../../../hooks/useFetch';
import { Chart } from './styled';
import { ButtonComponent, ChartComponent } from './components';
import { buttons } from '../../../../constants';

interface Props {
  id: string;
}

export default function Sparkline({ id }: Props) {
  const [days, setDays] = useState<string>('7');

  const { data, error } = useFetch<ISparkline>(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
  );

  const sparkline = data?.prices.map((data) => ({
    date: format(new Date(data[0]), 'MMM d y, hh:mm:ss a'),
    value: data[1],
  }));

  if (error) return (
    <Dialog open={true}>
      <Alert severity="error">Something went wrong</Alert>
    </Dialog>
  );

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={data ? false : true}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <Grid container justifyContent='flex-end' sx={{ py: 1 }}>
        {buttons.map((button) => (
          <ButtonComponent key={button.displayDays} {...button} setDays={setDays} days={days} />
        ))}
      </Grid>
      <Chart>
        {sparkline && (
          <ChartComponent sparkline={sparkline} days={days} />
        )}
      </Chart>
    </>
  );
};