import { useState } from 'react';
import {
  Search as SearchIcon,
} from '@mui/icons-material';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { createFilterOptions } from '@mui/material';
import useFetch from '../../../../hooks/useFetch';
import { Search, SearchIconWrapper, StyledInputBase } from './styled';
import { ICoinsList } from '../../../../interfaces';
import { ErrorModal } from '../../..';

export default function SearchBar() {
  const [value, setValue] = useState<string>('');

  const navigate: NavigateFunction = useNavigate();

  const { data, error } = useFetch<ICoinsList[]>(
    'https://api.coingecko.com/api/v3/coins/list?include_platform=false'
  );

  const defaultFilterOptions = createFilterOptions({
    matchFrom: 'start',
  });

  const filterOptions = (options: any, state: any) =>
    defaultFilterOptions(options, state).slice(0, 10);

  if (error) return <ErrorModal />

  return (
    <Search
      id='coins-search'
      inputValue={value}
      value={null}
      loading={data ? false : true}
      options={data ?? []}
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