import { CircularProgress } from '@mui/material';
import { SearchIconContainerProps } from './interface';
import { Search as SearchIcon } from '@mui/icons-material';
import { NAVBAR } from 'styles/styles';

export default function SearchIconContainer({
  isLoading,
}: SearchIconContainerProps) {
  return (
    <div className={NAVBAR.searchBar.iconContainer}>
      {isLoading ? (
        <CircularProgress size={18} sx={{ color: 'var(--brand-blue)' }} />
      ) : (
        <SearchIcon className='text-[var(--brand-blue)] text-[1.2rem] sm:text-[1.3rem]' />
      )}
    </div>
  );
}
