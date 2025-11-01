import { CircularProgress } from '@mui/material';
import { SearchIconContainerProps } from './interface';
import { Search as SearchIcon } from '@mui/icons-material';
import { UTILITY } from 'styles/styles';

export default function SearchIconContainer({
  isLoading,
}: SearchIconContainerProps) {
  return (
    <div
      className={`absolute inset-y-0 left-0 ${UTILITY.flexCenter} pl-4 sm:pl-5 pointer-events-none z-10`}
    >
      {isLoading ? (
        <CircularProgress size={18} sx={{ color: 'var(--brand-blue)' }} />
      ) : (
        <SearchIcon className='text-[var(--brand-blue)] text-[1.2rem] sm:text-[1.3rem]' />
      )}
    </div>
  );
}
