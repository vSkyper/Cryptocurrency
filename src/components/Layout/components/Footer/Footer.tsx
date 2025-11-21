import { CoinGeckoBadge, PoweredBySection } from './components';

export default function Footer() {
  return (
    <footer className='w-full bg-[#0a0a0f]/60 backdrop-blur-xl border-t border-white/5 px-4 py-6 sm:py-8 flex items-center justify-center mt-auto shadow-[0_-10px_40px_rgba(0,0,0,0.3)] relative z-10'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8 w-full max-w-7xl mx-auto'>
        <PoweredBySection />
        <CoinGeckoBadge />
      </div>
    </footer>
  );
}
