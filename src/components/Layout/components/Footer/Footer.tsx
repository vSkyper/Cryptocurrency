import { CoinGeckoBadge, PoweredBySection } from './components';

const FOOTER_CLASSES =
  'w-full bg-[color-mix(in_srgb,var(--bg-primary)_80%,transparent)] px-2 py-4 ' +
  'flex justify-center items-center';

const CONTAINER_CLASSES =
  'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full ' +
  'container px-2 sm:px-8';

export default function Footer() {
  return (
    <footer className={FOOTER_CLASSES}>
      <div className={CONTAINER_CLASSES}>
        <PoweredBySection />
        <CoinGeckoBadge />
      </div>
    </footer>
  );
}
