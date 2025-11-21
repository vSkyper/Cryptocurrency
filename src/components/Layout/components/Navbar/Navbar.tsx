import { SearchBar, Title, Tooltips } from './components';

export default function Navbar() {
  return (
    <div className='grow'>
      <nav className='fixed top-2 sm:top-6 left-0 right-0 mx-auto w-[calc(100%-1rem)] sm:w-[calc(100%-3rem)] max-w-7xl z-50 bg-[#0a0a0f]/60 backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-xl sm:rounded-2xl transition-all duration-300'>
        <div className='container mx-auto px-4 sm:px-2'>
          <div className='flex items-center justify-between gap-2 sm:gap-6 px-3 sm:px-6 py-2 sm:py-3 relative z-10'>
            {/* Left Section */}
            <div className='flex items-center justify-center sm:justify-start shrink-0 sm:flex-1 min-w-auto gap-2 sm:gap-4'>
              <Title />
            </div>

            {/* Search Section */}
            <div className='grow sm:grow-0 min-w-0 mx-1.5 sm:mx-6 w-full max-w-[500px]'>
              <SearchBar />
            </div>

            {/* Right Section */}
            <div className='flex items-center justify-center sm:justify-end shrink-0 sm:flex-1 min-w-auto gap-2 sm:gap-3'>
              <Tooltips />
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className='h-24 sm:h-32' />
    </div>
  );
}
