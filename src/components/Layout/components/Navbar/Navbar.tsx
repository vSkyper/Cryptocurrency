import { SearchBar, Title, Tooltips } from './components';

const NAV_CLASSES =
  'fixed top-0 left-0 right-0 z-50 bg-[color-mix(in_srgb,var(--bg-primary)_30%,transparent)] ' +
  'backdrop-blur-md border-b-0';

const CONTAINER_CLASSES =
  'flex items-center justify-between gap-2 sm:gap-6 md:gap-8 py-3 sm:py-4 ' +
  'min-h-14 sm:min-h-16 relative z-10';

const SEARCH_CONTAINER_CLASSES =
  'flex-grow min-w-0 mx-2 sm:mx-4 md:mx-6 sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]';

const SECTION_CLASSES = 'flex items-center flex-shrink-0 min-w-auto';

export default function Navbar() {
  return (
    <div className='flex-grow'>
      <nav className={NAV_CLASSES}>
        <div className='container mx-auto px-4 sm:px-2'>
          <div className={CONTAINER_CLASSES}>
            {/* Left Section */}
            <div className={`${SECTION_CLASSES} gap-2 sm:gap-4`}>
              <Title />
            </div>

            {/* Search Section */}
            <div className={SEARCH_CONTAINER_CLASSES}>
              <SearchBar />
            </div>

            {/* Right Section */}
            <div className={`${SECTION_CLASSES} gap-2 sm:gap-3`}>
              <Tooltips />
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className='min-h-14 sm:min-h-16' />
    </div>
  );
}
