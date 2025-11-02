import { SearchBar, Title, Tooltips } from './components';
import { NAVBAR } from 'styles/styles';

export default function Navbar() {
  return (
    <div className='flex-grow'>
      <nav className={NAVBAR.nav}>
        <div className='container mx-auto px-4 sm:px-2'>
          <div className={NAVBAR.container}>
            {/* Left Section */}
            <div className={`${NAVBAR.section} gap-2 sm:gap-4`}>
              <Title />
            </div>

            {/* Search Section */}
            <div className={NAVBAR.searchContainer}>
              <SearchBar />
            </div>

            {/* Right Section */}
            <div className={`${NAVBAR.section} gap-2 sm:gap-3`}>
              <Tooltips />
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className={NAVBAR.spacer} />
    </div>
  );
}
