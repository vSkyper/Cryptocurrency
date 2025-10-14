import { SearchBar, Title, Tooltips } from './components';

export default function Navbar() {
  return (
    <div className='flex-grow'>
      <nav className='fixed top-0 left-0 right-0 z-50 bg-[color-mix(in_srgb,var(--bg-primary)_30%,transparent)] backdrop-blur-[10px] border-b-0'>
        <div className='container mx-auto px-2 sm:px-2'>
          <div className='flex items-center justify-between gap-2 sm:gap-6 md:gap-8 py-3 sm:py-4 min-h-[60px] sm:min-h-[72px] relative z-10'>
            {/* Left Section */}
            <div className='flex items-center gap-2 sm:gap-4 flex-shrink-0 min-w-auto'>
              <Title />
            </div>

            {/* Search Section */}
            <div className='flex-grow min-w-0 mx-2 sm:mx-4 md:mx-6 sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]'>
              <SearchBar />
            </div>

            {/* Right Section */}
            <div className='flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-auto'>
              <Tooltips />
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer */}
      <div className='min-h-[60px] sm:min-h-[72px]' />
    </div>
  );
}
