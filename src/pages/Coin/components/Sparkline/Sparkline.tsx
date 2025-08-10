import { useState } from 'react';
import { Grid, CircularProgress, Box } from '@mui/material';
import { format } from 'date-fns';
import { Chart } from './styled';
import { ButtonComponent, ChartComponent } from './components';
import { ErrorModal } from 'components';
import { ISparkline } from 'interfaces';
import useFetch from 'hooks/useFetch';
import { buttons } from 'constants/coin';
import { SparklineProps } from './interface';

export default function Sparkline(props: SparklineProps) {
  const { id } = props;

  const [days, setDays] = useState<string>('7');

  const { data, error } = useFetch<ISparkline>(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
  );

  const sparkline = data?.prices.map((data) => ({
    date: format(new Date(data[0]), 'MMM d y, hh:mm:ss a'),
    value: data[1],
  }));

  if (error) return <ErrorModal />;

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Grid container justifyContent='flex-end' spacing={1}>
          {buttons.map((button) => (
            <Grid key={button.days}>
              <ButtonComponent
                {...button}
                setDays={setDays}
                actualDays={days}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Chart sx={{ position: 'relative', zIndex: 1 }}>
        {!data && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              zIndex: 2,
            }}
          >
            <CircularProgress size={40} />
          </Box>
        )}
        {sparkline && <ChartComponent sparkline={sparkline} days={days} />}
      </Chart>
    </>
  );
}
