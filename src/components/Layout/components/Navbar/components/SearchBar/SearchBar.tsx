import { useCallback, useState } from 'react';
import { Search as SearchIcon, ArrowForwardIos } from '@mui/icons-material';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import {
  AutocompleteRenderInputParams,
  FilterOptionsState,
  createFilterOptions,
  CircularProgress,
} from '@mui/material';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  OptionContainer,
  OptionContent,
  OptionName,
  OptionMeta,
  SymbolChip,
  OptionId,
  InputWrapper,
  ArrowIcon,
} from './styled';
import { ICoinsList } from 'interfaces';
import useFetch from 'hooks/useFetch';
import { ErrorModal } from 'components';

const API_KEY = 'CG-Gq8TjhLV8eipyhqmcRtXoZee';

export default function SearchBar() {
  const [value, setValue] = useState<string>('');

  const navigate: NavigateFunction = useNavigate();

  const { data, error } = useFetch<ICoinsList[]>(
    `https://api.coingecko.com/api/v3/coins/list?include_platform=false&x_cg_demo_api_key=${API_KEY}`
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
      <OptionContainer component='li' {...props}>
        <OptionContent>
          <OptionName variant='body1'>{option.name}</OptionName>
          <OptionMeta>
            <SymbolChip label={option.symbol?.toUpperCase()} size='small' />
            <OptionId variant='caption'>{option.id}</OptionId>
          </OptionMeta>
        </OptionContent>
        <ArrowIcon>
          <ArrowForwardIos />
        </ArrowIcon>
      </OptionContainer>
    ),
    []
  );

  const handleRenderInput = useCallback(
    (params: AutocompleteRenderInputParams) => (
      <InputWrapper ref={params.InputProps.ref}>
        <SearchIconWrapper>
          {data ? (
            <SearchIcon />
          ) : (
            <CircularProgress size={18} sx={{ color: 'var(--brand-blue)' }} />
          )}
        </SearchIconWrapper>
        <StyledInputBase
          inputProps={params.inputProps}
          placeholder={data ? 'Search cryptocurrencies...' : 'Loading coins...'}
        />
      </InputWrapper>
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
