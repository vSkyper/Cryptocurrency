import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Sparklines, SparklinesLine } from 'react-sparklines';
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
  card: {
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    backgroundColor: theme.palette.primary.light,
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
        price: coin.market_data.current_price.usd,
        market_cap: coin.market_data.market_cap.usd.toLocaleString(),
        volume: coin.market_data.total_volume.usd.toLocaleString(),
        price_change_24h: coin.market_data.price_change_percentage_24h,
        price_change_7d: coin.market_data.price_change_percentage_7d,
        price_change_14d: coin.market_data.price_change_percentage_14d,
        price_change_30d: coin.market_data.price_change_percentage_30d,
        price_change_60d: coin.market_data.price_change_percentage_60d,
        price_change_200d: coin.market_data.price_change_percentage_200d,
        price_change_1y: coin.market_data.price_change_percentage_1y,
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
    setInterval(() => {
      getCoin(setCoin, id);
    }, 5000
    );
  }, [id]);

  return (
    <main>
      <Box className={classes.name}>
        <img src={coin.img} style={{ marginRight: 10 }} width="50vw" alt="img"></img>
        <Typography variant="h4">{coin.name}</Typography>
      </Box>
      <Grid container justifyContent="center">
        <Grid item className={classes.card} xs={12} sm={6} md={4}>
          <Typography variant="h4">{coin.price}</Typography>
          <Typography variant="subtitle1">
            Price
          </Typography>
        </Grid>
        <Grid item className={classes.card} xs={12} sm={6} md={4}>
          <Typography variant="h4">{coin.market_cap}</Typography>
          <Typography variant="subtitle1">
            Market Cap
          </Typography>
        </Grid>
        <Grid item className={classes.card} xs={12} sm={6} md={4}>
          <Typography variant="h4">{coin.volume}</Typography>
          <Typography variant="subtitle1">
            Volume
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: 30, textAlign: 'center' }}>
        <Grid item xs={12} sm={10}>
          <Typography variant="h4">7 Days Price Change</Typography>
          <Sparklines data={coin.sparkline}>
            <SparklinesLine color={coin.price_change_7d < 0 ? '#e15241' : '#4eaf0a'} />
          </Sparklines>
        </Grid>
      </Grid>
    </main>
  );
}

export default Coin;
