import { useCallback, useState } from 'react';
import { Search as SearchIcon, TrendingUp, ArrowForwardIos } from '@mui/icons-material';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import {
  AutocompleteRenderInputParams,
  FilterOptionsState,
  createFilterOptions,
  CircularProgress,
  Box,
  Typography,
  Chip,
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

  const handleRenderOption = useCallback(
    (props: any, option: ICoinsList) => (
      <Box
        component="li"
        {...props}
        sx={{
          display: 'flex !important',
          alignItems: 'center !important',
          justifyContent: 'space-between !important',
          padding: '14px 18px !important',
          margin: '4px 0 !important',
          borderRadius: '12px !important',
          cursor: 'pointer !important',
          ...props.sx,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 600,
              fontSize: '0.95rem',
              lineHeight: 1.2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {option.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
            <Chip
              label={option.symbol?.toUpperCase()}
              size="small"
              sx={{
                height: 20,
                fontSize: '0.7rem',
                fontWeight: 600,
                background: 'rgba(208, 188, 255, 0.15)',
                color: 'rgba(208, 188, 255, 0.9)',
                border: '1px solid rgba(208, 188, 255, 0.2)',
                '& .MuiChip-label': {
                  px: 1,
                },
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '0.75rem',
                fontWeight: 400,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                flex: 1,
              }}
            >
              {option.id}
            </Typography>
          </Box>
        </Box>
        <ArrowForwardIos
          sx={{
            fontSize: '0.8rem',
            color: 'rgba(208, 188, 255, 0.4)',
            ml: 2,
            transition: 'all 200ms ease',
            transform: 'translateX(0)',
            '.MuiAutocomplete-option:hover &': {
              color: 'rgba(208, 188, 255, 0.8)',
              transform: 'translateX(4px)',
            },
          }}
        />
      </Box>
    ),
    []
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
      renderOption={handleRenderOption}
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
