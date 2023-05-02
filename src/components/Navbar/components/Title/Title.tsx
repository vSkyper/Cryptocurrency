import {
  Typography,
  IconButton,
  Link,
  Tooltip,
} from '@mui/material';
import {
  EuroSymbol as EuroSymbolIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export default function Title() {
  return (
    <>
      <Tooltip title='Homepage'>
        <IconButton
          color='inherit'
          size='large'
          edge='start'
          sx={{ mr: 2 }}
          component={RouterLink}
          to='/'
        >
          <EuroSymbolIcon />
        </IconButton>
      </Tooltip>
      <Typography
        variant='h6'
        noWrap
        component='div'
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        <Link
          color='inherit'
          underline='none'
          component={RouterLink}
          to='/'
        >
          Cryptocurrency
        </Link>
      </Typography>
    </>
  )
}