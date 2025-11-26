import { MdSearchOff } from 'react-icons/md';

export default function EmptyState() {
  return (
    <div className='flex flex-col items-center justify-center py-8 px-4 text-center select-none'>
      {/* Icon Circle */}
      <div className='bg-white/5 rounded-full p-3 mb-3 border border-white/5'>
        <MdSearchOff className='w-6 h-6 text-white/40' />
      </div>

      {/* Main Text */}
      <p className='text-sm font-semibold text-white/90 mb-1'>No coins found</p>

      {/* Helper Text */}
      <p className='text-xs text-white/50 max-w-[200px] leading-relaxed'>
        We couldn't find any coin matching your search.
      </p>
    </div>
  );
}
