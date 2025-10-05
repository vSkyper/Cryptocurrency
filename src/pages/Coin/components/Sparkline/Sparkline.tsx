import { useState } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { format } from 'date-fns';
import { Chart, ButtonContainer, StyledBackdrop } from './styled';
import { ButtonComponent, ChartComponent } from './components';
import { ErrorModal } from 'components';
import { ISparkline } from 'interfaces';
import useFetch from 'hooks/useFetch';
import { buttons } from 'constants/coin';
import { SparklineProps } from './interface';

const API_KEY = 'CG-Gq8TjhLV8eipyhqmcRtXoZee';
const DEFAULT_DAYS = '7';

const formatSparklineData = (prices: number[][]) => {
  return prices.map((priceData) => ({
    date: format(new Date(priceData[0]), 'MMM d y, hh:mm:ss a'),
    value: priceData[1],
  }));
};

export default function Sparkline({ id }: SparklineProps) {
  const [days, setDays] = useState<string>(DEFAULT_DAYS);

  const apiUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&x_cg_demo_api_key=${API_KEY}`;
  const { data, error } = useFetch<ISparkline>(apiUrl);

  const sparkline = data?.prices ? formatSparklineData(data.prices) : undefined;

  if (error) return <ErrorModal />;

  return (
    <>
      <ButtonContainer>
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
      </ButtonContainer>

      <Chart>
        <StyledBackdrop open={!data}>
          <CircularProgress />
        </StyledBackdrop>
        {sparkline && <ChartComponent sparkline={sparkline} days={days} />}
      </Chart>
    </>
  );
}
