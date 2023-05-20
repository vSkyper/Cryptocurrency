import { Typography, Link } from '@mui/material';
import { Foot } from './styled';

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
