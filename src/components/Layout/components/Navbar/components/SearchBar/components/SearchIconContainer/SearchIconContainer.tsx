import { CircularProgress } from '@mui/material';
import { SearchIconContainerProps } from './interface';
import { Search as SearchIcon } from '@mui/icons-material';

export default function SearchIconContainer({
  isLoading,
}: SearchIconContainerProps) {
  return (
    <div className='absolute inset-y-0 left-0 flex items-center justify-center pl-3 sm:pl-5 pointer-events-none z-10 text-(--brand-blue)'>
      {isLoading ? (
        <CircularProgress size={18} sx={{ color: 'var(--brand-blue)' }} />
      ) : (
        <SearchIcon className='text-(--brand-blue) text-[1rem]! sm:text-[1.5rem]!' />
      )}
    </div>
  );
}
