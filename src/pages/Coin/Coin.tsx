import { Container, Typography, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Name } from './styled';
import useFetch from '../../hooks/useFetch';
import { ICoin } from '../../interfaces';
import { Exchange, Links, PriceCard, Sparkline, StackData } from './components';
import { ErrorModal, LoadingModal } from '../../components';

export default function Coin() {
  const { id } = useParams();

  const { data, error } = useFetch<ICoin>(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );

  if (!id || error) return <ErrorModal />

  if (!data) return <LoadingModal />

  return (
    <main>
      <Name>
        <img
          src={data.image.large}
          style={{ marginRight: 10 }}
          width='35vw'
          alt='logo'
        />
        <Typography variant='h5'>{data.name}</Typography>
      </Name>
      <Container maxWidth='xl'>
        <Grid
          container
          direction={{ xs: 'column-reverse', lg: 'row' }}
          spacing={2}
        >
          <Grid item xs={12} lg={7}>
            <Sparkline id={id} />
          </Grid>
          <Grid item xs={12} lg={5}>
            <PriceCard data={data} />
          </Grid>
        </Grid>
        <Grid
          container
          direction={{ xs: 'column-reverse', lg: 'row' }}
          spacing={2}
          sx={{ mt: 1 }}
        >
          <Grid item xs={12} lg={7}>
            <StackData marketData={data.market_data} />
          </Grid>
          <Grid item xs={12} lg={5}>
            <Grid container direction='column'>
              <Grid item xs={12}>
                <Exchange id={id} symbol={data.symbol} />
              </Grid>
              <Grid item xs={12}>
                <Links data={data} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </main>
  );

};