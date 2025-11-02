import { CoinGeckoBadge, PoweredBySection } from './components';
import { FOOTER } from 'styles/styles';

export default function Footer() {
  return (
    <footer className={FOOTER.footer}>
      <div className={FOOTER.container}>
        <PoweredBySection />
        <CoinGeckoBadge />
      </div>
    </footer>
  );
}
