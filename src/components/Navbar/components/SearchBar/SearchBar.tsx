import { useCallback, useState } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import {
  AutocompleteRenderInputParams,
  FilterOptionsState,
  createFilterOptions,
} from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from './styled';
import { ICoinsList } from 'interfaces';
import useFetch from 'hooks/useFetch';
import { ErrorModal } from 'components';

export default function SearchBar() {
  const [value, setValue] = useState<string>('');

  const navigate: NavigateFunction = useNavigate();

  const { data, error } = useFetch<ICoinsList[]>(
    'https://api.coingecko.com/api/v3/coins/list?include_platform=false'
  );

  const defaultFilterOptions = createFilterOptions<ICoinsList>({
    matchFrom: 'start',
  });

  const filterOptions = useCallback(
    (options: ICoinsList[], state: FilterOptionsState<ICoinsList>) =>
      defaultFilterOptions(options, state).slice(0, 10),
    [defaultFilterOptions]
  );

  const handleOptionLabel = useCallback(
    (option: ICoinsList) => option.name,
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
      <div ref={params.InputProps.ref}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase inputProps={params.inputProps} placeholder='Search…' />
      </div>
    ),
    []
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
      onInputChange={handleInputChange}
      onChange={handleChange}
      renderInput={handleRenderInput}
    />
  );
}
