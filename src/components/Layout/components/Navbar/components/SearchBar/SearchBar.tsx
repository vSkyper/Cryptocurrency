import { useCallback, useState } from 'react';
import { Search as SearchIcon, TrendingUp } from '@mui/icons-material';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import {
  AutocompleteRenderInputParams,
  FilterOptionsState,
  createFilterOptions,
  CircularProgress,
  Box,
} from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from './styled';
import { ICoinsList } from 'interfaces';
import useFetch from 'hooks/useFetch';
import { ErrorModal } from 'components';

export default function SearchBar() {
  const [value, setValue] = useState<string>('');

  const navigate: NavigateFunction = useNavigate();

  const { data, error } = useFetch<ICoinsList[]>(
    'https://api.coingecko.com/api/v3/coins/list?include_platform=false&x_cg_demo_api_key=CG-Gq8TjhLV8eipyhqmcRtXoZee'
  );

  const defaultFilterOptions = createFilterOptions<ICoinsList>({
    matchFrom: 'start',
  });

  const filterOptions = useCallback(
    (options: ICoinsList[], state: FilterOptionsState<ICoinsList>) =>
      defaultFilterOptions(options, state).slice(0, 8),
    [defaultFilterOptions]
  );

  const handleOptionLabel = useCallback(
    (option: ICoinsList) => `${option.name} (${option.symbol?.toUpperCase()})`,
    []
  );

  const handleInputChange = useCallback(
    (_: React.SyntheticEvent, value: string) => {
      setValue(value);
    },
    []
  );

  const handleChange = useCallback(
    (_: React.SyntheticEvent, value: ICoinsList | null) => {
      if (!value) return;
      setValue('');
      navigate(`/coins/${value.id}`);
    },
    [navigate]
  );

  const handleRenderInput = useCallback(
    (params: AutocompleteRenderInputParams) => (
      <Box
        ref={params.InputProps.ref}
        sx={{ position: 'relative', width: '100%' }}
      >
        <SearchIconWrapper>
          {data ? (
            <SearchIcon />
          ) : (
            <CircularProgress
              size={18}
              sx={{ color: 'rgba(208, 188, 255, 0.7)' }}
            />
          )}
        </SearchIconWrapper>
        <StyledInputBase
          inputProps={params.inputProps}
          placeholder={data ? 'Search cryptocurrencies...' : 'Loading coins...'}
        />
        {value && (
          <Box
            sx={{
              position: 'absolute',
              right: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'rgba(208, 188, 255, 0.5)',
              fontSize: '0.75rem',
              fontWeight: 500,
              pointerEvents: 'none',
            }}
          >
            <TrendingUp sx={{ fontSize: '1rem' }} />
          </Box>
        )}
      </Box>
    ),
    [data, value]
  );

  if (error) return <ErrorModal />;

  return (
    <Search
      id='coins-search'
      inputValue={value}
      value={null}
      loading={data ? false : true}
      options={data ?? []}
      filterOptions={filterOptions}
      getOptionLabel={handleOptionLabel}
      forcePopupIcon={false}
      autoComplete
      includeInputInList
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      onInputChange={handleInputChange}
      onChange={handleChange}
      renderInput={handleRenderInput}
      noOptionsText='No cryptocurrencies found'
      loadingText='Loading cryptocurrencies...'
    />
  );
}
