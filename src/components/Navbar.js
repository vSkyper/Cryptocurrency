import { useState, useContext } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
  Tooltip,
  InputBase,
} from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { styled, alpha } from '@mui/material/styles';
import {
  Search as SearchIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  EuroSymbol as EuroSymbolIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import useFetch from '../useFetch';
import { Context } from '../Context';

const Search = styled(Autocomplete)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

const Navbar = () => {
  const [value, setValue] = useState('');
  const { themeMode, setThemeMode } = useContext(Context);

  const history = useHistory();

  const { data: coinsList, loading: coinsListLoading } = useFetch(
    'https://api.coingecko.com/api/v3/coins/list?include_platform=false'
  );

  const defaultFilterOptions = createFilterOptions({
    matchFrom: 'start',
  });

  const filterOptions = (options, state) =>
    defaultFilterOptions(options, state).slice(0, 10);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
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
          <Search
            id='coins-search'
            inputValue={value}
            value={null}
            loading={coinsListLoading}
            options={coinsList ?? []}
            filterOptions={filterOptions}
            getOptionLabel={(option) => option.name}
            forcePopupIcon={false}
            autoComplete
            onInputChange={(e) => {
              if (e != null) {
                setValue(e.target.value);
              }
            }}
            onChange={(e, value) => {
              if (value != null) {
                setValue('');
                history.push(`/coins/${value.id}`);
              }
            }}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  inputProps={params.inputProps}
                  placeholder='Search…'
                />
              </div>
            )}
          />
          <Tooltip title='GitHub repository'>
            <IconButton
              color='inherit'
              size='large'
              href='https://github.com/vSkyper/react_cryptocurrency'
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Toggle light/dark theme'>
            <IconButton
              color='inherit'
              size='large'
              onClick={() => setThemeMode(!themeMode)}
            >
              {themeMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Navbar;
