import { useState } from 'react';
import {
  Search as SearchIcon,
} from '@mui/icons-material';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { Alert, Dialog, createFilterOptions } from '@mui/material';
import useFetch from '../../../../hooks/useFetch';
import { Search, SearchIconWrapper, StyledInputBase } from './styled';
import { CoinsList } from '../../../../interfaces';

export default function SearchBar() {
  const [value, setValue] = useState<string>('');

  const navigate: NavigateFunction = useNavigate();

  const { data: coinsList, error } = useFetch<CoinsList[]>(
    'https://api.coingecko.com/api/v3/coins/list?include_platform=false'
  );

  const defaultFilterOptions = createFilterOptions({
    matchFrom: 'start',
  });

  const filterOptions = (options: any, state: any) =>
    defaultFilterOptions(options, state).slice(0, 10);

  if (error) return (
    <Dialog open={true}>
      <Alert severity="error">Something went wrong</Alert>
    </Dialog>
  );

  return (
    <Search
      id='coins-search'
      inputValue={value}
      value={null}
      loading={coinsList ? false : true}
      options={coinsList ?? []}
      filterOptions={filterOptions}
      getOptionLabel={(option: any) => option.name}
      forcePopupIcon={false}
      autoComplete
      onInputChange={(e: any) => {
        if (e != null) {
          setValue(e.target.value);
        }
      }}
      onChange={(_, value: any) => {
        if (value != null) {
          setValue('');
          navigate(`/coins/${value.id}`);
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
  )
};