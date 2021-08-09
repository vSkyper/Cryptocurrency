import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, ResponsiveContainer, Area } from 'recharts';
import { format } from 'date-fns';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  name: {
    boxShadow: 'none',
    paddingTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2, 0),
  },
  chart: {
    boxShadow: 'none',
    height: 300,
    [theme.breakpoints.up('sm')]: {
      height: 495,
    },
    color: 'black',
    padding: theme.spacing(3, 3),
  },
  card: {
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(2, 0),
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
  }
}));

function getCoin(setCoin, id, setSparkline) {
  axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&sparkline=true`)
    .then(res => {
      let coin = res.data;
      setCoin({
        id: coin.id,
        name: coin.name,
        img: coin.image.large,
        price: coin.market_data.current_price.usd,
        market_cap: (coin.market_data.market_cap.usd === null) ? "" : coin.market_data.market_cap.usd.toLocaleString(),
        volume: (coin.market_data.total_volume.usd === null) ? "" : coin.market_data.total_volume.usd.toLocaleString(),
        price_change_24h: (coin.market_data.price_change_percentage_24h === null) ? "" : coin.market_data.price_change_percentage_24h.toFixed(2),
        price_change_7d: (coin.market_data.price_change_percentage_7d === null) ? "" : coin.market_data.price_change_percentage_7d.toFixed(2),
        price_change_14d: (coin.market_data.price_change_percentage_14d === null) ? "" : coin.market_data.price_change_percentage_14d.toFixed(2),
        price_change_30d: (coin.market_data.price_change_percentage_30d === null) ? "" : coin.market_data.price_change_percentage_30d.toFixed(2),
        price_change_60d: (coin.market_data.price_change_percentage_60d === null) ? "" : coin.market_data.price_change_percentage_60d.toFixed(2),
        price_change_1y: (coin.market_data.price_change_percentage_1y === null) ? "" : coin.market_data.price_change_percentage_1y.toFixed(2)
      });
    })
    .catch(error => console.log(error));
}

function Coin() {
  const classes = useStyles();
  const [coin, setCoin] = useState([]);
  const [sparkline, setSparkline] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    getCoin(setCoin, id, setSparkline);
    const IntervalID = setInterval(() => {
      getCoin(setCoin, id, setSparkline);
    }, 5000
    );
    return () => {
      setCoin([]);
      clearInterval(IntervalID);
    };
  }, [id]);

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
      .then(res => {
        const temp_data = [];
        res.data.prices.forEach(data => {
          temp_data.push({
            date: format(new Date(data[0]), "MMM d y, hh:mm:ss"),
            value: data[1],
          })
        })
        setSparkline(temp_data);
      })
      .catch(error => console.log(error));
    return () => {

    };
  }, [id]);

  return (
    <main>
      <Paper className={classes.name}>
        <img src={coin.img} style={{ marginRight: 10 }} width="40vw" alt="img"></img>
        <Typography variant="h5">{coin.name}</Typography>
      </Paper>
      <Grid container justifyContent="center" wrap="wrap-reverse" style={{ gap: 30 }}>
        <Grid item xs={12} lg={7}>
          <Paper className={classes.chart}>
            {sparkline.length > 0 &&
              <ResponsiveContainer>
                <AreaChart data={sparkline}>
                  <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#648dae" stopOpacity={0.4} />
                      <stop offset="75%" stopColor="#648dae" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <Area dataKey="value" stroke="#648dae" fill="url(#color)" />
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    interval={24}
                    tickFormatter={value => format(new Date(value), "MMM, d")}
                  />
                  <YAxis
                    dataKey="value"
                    domain={["auto", "auto"]}
                    axisLine={false}
                    tickLine={false}
                    tickCount={10}
                    tickFormatter={value => `$${value}`}
                  />
                  <Tooltip />
                  <CartesianGrid opacity={0.05} vertical={false} />
                </AreaChart>
              </ResponsiveContainer>}
          </Paper>
        </Grid>
        <Grid item lg={4}>
          <Grid container direction="column">
            <Grid item>
              <Paper className={classes.card}>
                <Typography variant="h4">{coin.price} USD</Typography>
                <Typography variant="subtitle1">
                  Price
                </Typography>
              </Paper>
            </Grid>
            <Grid item lg={12}>
              <Grid container justifyContent="center" style={{ gap: 30, marginTop: 30 }}>
                <Grid item xs={8} sm={5} md={3} lg={5}>
                  <Paper className={(coin.price_change_24h < 0) ? classes.cardPercentageNegative : classes.cardPercentagePositive}>
                    <Typography variant="h4">{coin.price_change_24h} %</Typography>
                    <Typography variant="subtitle1">
                      Price Change 24h
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={8} sm={5} md={3} lg={5}>
                  <Paper className={(coin.price_change_7d < 0) ? classes.cardPercentageNegative : classes.cardPercentagePositive}>
                    <Typography variant="h4">{coin.price_change_7d} %</Typography>
                    <Typography variant="subtitle1">
                      Price Change 7d
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={8} sm={5} md={3} lg={5}>
                  <Paper className={(coin.price_change_14d < 0) ? classes.cardPercentageNegative : classes.cardPercentagePositive}>
                    <Typography variant="h4">{coin.price_change_14d} %</Typography>
                    <Typography variant="subtitle1">
                      Price Change 14d
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={8} sm={5} md={3} lg={5}>
                  <Paper className={(coin.price_change_30d < 0) ? classes.cardPercentageNegative : classes.cardPercentagePositive}>
                    <Typography variant="h4">{coin.price_change_30d} %</Typography>
                    <Typography variant="subtitle1">
                      Price Change 30d
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={8} sm={5} md={3} lg={5}>
                  <Paper className={(coin.price_change_60d < 0) ? classes.cardPercentageNegative : classes.cardPercentagePositive}>
                    <Typography variant="h4">{coin.price_change_60d} %</Typography>
                    <Typography variant="subtitle1">
                      Price Change 60d
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={8} sm={5} md={3} lg={5}>
                  <Paper className={(coin.price_change_1y < 0) ? classes.cardPercentageNegative : classes.cardPercentagePositive}>
                    <Typography variant="h4">{coin.price_change_1y} %</Typography>
                    <Typography variant="subtitle1">
                      Price Change 1y
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" style={{ gap: 30, marginTop: 30 }}>
      <Grid item xs={12} md={5}>
          <Paper className={classes.card}>
            <Typography variant="h4">{coin.market_cap} USD</Typography>
            <Typography variant="subtitle1">
              Market Cap
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper className={classes.card}>
            <Typography variant="h4">{coin.volume} USD</Typography>
            <Typography variant="subtitle1">
              Volume
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </main>
  );
}

export default Coin;
