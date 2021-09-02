import { Paper, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const Foot = styled(Paper)(({ theme }) => ({
  boxShadow: 'none',
  marginTop: 30,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2, 0),
}));

const Footer = () => {
  return (
    <Foot square>
      <Typography>
        Powered by{' '}
        <Link underline='hover' href='https://www.coingecko.com'>
          CoinGecko API
        </Link>
      </Typography>
    </Foot>
  );
};

export default Footer;
