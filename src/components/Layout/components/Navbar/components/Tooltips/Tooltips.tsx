import { GitHub as GitHubIcon } from '@mui/icons-material';
import { NAVBAR } from 'styles/styles';

const GITHUB_URL = 'https://github.com/vSkyper/cryptocurrency';

export default function Tooltips() {
  const buttonClasses = `${NAVBAR.tooltips.buttonBase} ${NAVBAR.tooltips.buttonGradient} ${NAVBAR.tooltips.buttonHover} ${NAVBAR.tooltips.buttonActive} text-[var(--brand-blue)]`;

  return (
    <a
      href={GITHUB_URL}
      target='_blank'
      rel='noopener noreferrer'
      title='View GitHub Repository'
      className={buttonClasses}
    >
      <span className={NAVBAR.tooltips.shineEffect} />
      <GitHubIcon
        sx={{ fontSize: '1.1rem' }}
        className={NAVBAR.tooltips.icon}
      />
    </a>
  );
}
