import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  name: {
    paddingTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  card1: {
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: '#6e3801',
    backgroundColor: theme.palette.warning.light,
  },
  card2: {
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: '#263642',
    backgroundColor: theme.palette.primary.light,
  },
  card3: {
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: '#52303a',
    backgroundColor: theme.palette.secondary.light,
  },
  cardPercentageNegative: {
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(2, 0),
    color: '#571313',
    backgroundColor: theme.palette.error.light,
  },
  cardPercentagePositive: {
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(2, 0),
    color: '#1d471f',
    backgroundColor: theme.palette.success.light,
  },
}));

function getCoin(setCoin, id) {
  axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&sparkline=true`)
    .then(res => {
      let coin = res.data;
      setCoin({
        id: coin.id,
        name: coin.name,
        img: coin.image.large,
        price: (coin.market_data.current_price.usd === null) ? "" : coin.market_data.current_price.usd.toLocaleString(),
        market_cap: (coin.market_data.market_cap.usd === null) ? "" : coin.market_data.market_cap.usd.toLocaleString(),
        volume: (coin.market_data.total_volume.usd === null) ? "" : coin.market_data.total_volume.usd.toLocaleString(),
        price_change_24h: (coin.market_data.price_change_percentage_24h === null) ? "" : coin.market_data.price_change_percentage_24h.toFixed(2),
        price_change_7d: (coin.market_data.price_change_percentage_7d === null) ? "" : coin.market_data.price_change_percentage_7d.toFixed(2),
        price_change_14d: (coin.market_data.price_change_percentage_14d === null) ? "" : coin.market_data.price_change_percentage_14d.toFixed(2),
        price_change_30d: (coin.market_data.price_change_percentage_30d === null) ? "" : coin.market_data.price_change_percentage_30d.toFixed(2),
        price_change_60d: (coin.market_data.price_change_percentage_60d === null) ? "" : coin.market_data.price_change_percentage_60d.toFixed(2),
        price_change_200d: (coin.market_data.price_change_percentage_200d === null) ? "" : coin.market_data.price_change_percentage_200d.toFixed(2),
        price_change_1y: (coin.market_data.price_change_percentage_1y === null) ? "" : coin.market_data.price_change_percentage_1y.toFixed(2),
        sparkline: coin.market_data.sparkline_7d.price
      });
    })
    .catch(error => console.log(error));
}

function Coin() {
  const classes = useStyles();
  const [coin, setCoin] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    getCoin(setCoin, id);
    const IntervalID = setInterval(() => {
      getCoin(setCoin, id);
    }, 5000
    );
    return () => {
      setCoin([]);
      clearInterval(IntervalID);
    };
  }, [id]);

  const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');

      script.src = url;
      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };

  return (
    <main>
      <Box className={classes.name}>
        <img src={coin.img} style={{ marginRight: 10 }} width="50vw" alt="img"></img>
        <Typography variant="h4">{coin.name}</Typography>
      </Box>
      <Grid container justifyContent="center" style={{ gap: 30 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.card1}>
            <Typography variant="h4">{coin.price} USD</Typography>
            <Typography variant="subtitle1">
              Price
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.card2}>
            <Typography variant="h4">{coin.market_cap} USD</Typography>
            <Typography variant="subtitle1">
              Market Cap
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper className={classes.card3}>
            <Typography variant="h4">{coin.volume} USD</Typography>
            <Typography variant="subtitle1">
              Volume
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: 30 }}>
        <Grid item xs={12} sm={10}>
          {useScript('https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js')}
          <coingecko-coin-compare-chart-widget coin-ids={id} currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: 20, marginBottom: 20, gap: 30 }}>
        <Grid item xs={5} md={3} lg={2}>
          <Paper className={(coin.price_change_24h < 0) ? classes.cardPercentageNegative : classes.cardPercentagePositive}>
            <Typography variant="h4">{coin.price_change_24h} %</Typography>
            <Typography variant="subtitle1">
              Price Change 24h
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5} md={3} lg={2}>
          <Paper className={(coin.price_change_7d < 0) ? classes.cardPercentageNegative : classes.cardPercentagePositive}>
            <Typography variant="h4">{coin.price_change_7d} %</Typography>
            <Typography variant="subtitle1">
              Price Change 7d
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5} md={3} lg={2}>
          <Paper className={(coin.price_change_14d < 0) ? classes.cardPercentageNegative : classes.cardPercentagePositive}>
            <Typography variant="h4">{coin.price_change_14d} %</Typography>
            <Typography variant="subtitle1">
              Price Change 14d
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5} md={3} lg={2}>
          <Paper className={(coin.price_change_30d < 0) ? classes.cardPercentageNegative : classes.cardPercentagePositive}>
            <Typography variant="h4">{coin.price_change_30d} %</Typography>
            <Typography variant="subtitle1">
              Price Change 30d
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5} md={3} lg={2}>
          <Paper className={(coin.price_change_60d < 0) ? classes.cardPercentageNegative : classes.cardPercentagePositive}>
            <Typography variant="h4">{coin.price_change_60d} %</Typography>
            <Typography variant="subtitle1">
              Price Change 60d
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5} md={3} lg={2}>
          <Paper className={(coin.price_change_200d < 0) ? classes.cardPercentageNegative : classes.cardPercentagePositive}>
            <Typography variant="h4">{coin.price_change_200d} %</Typography>
            <Typography variant="subtitle1">
              Price Change 200d
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5} md={3} lg={2}>
          <Paper className={(coin.price_change_1y < 0) ? classes.cardPercentageNegative : classes.cardPercentagePositive}>
            <Typography variant="h4">{coin.price_change_1y} %</Typography>
            <Typography variant="subtitle1">
              Price Change 1y
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </main>
  );
}

export default Coin;
