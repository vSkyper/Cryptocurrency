import { GitHub as GitHubIcon } from '@mui/icons-material';

export default function Tooltips() {
  return (
    <a
      href='https://github.com/vSkyper/cryptocurrency'
      target='_blank'
      rel='noopener noreferrer'
      title='View GitHub Repository'
      className='inline-flex items-center justify-center bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-blue)_12%,transparent)] to-[color-mix(in_srgb,var(--brand-blue)_6%,transparent)] backdrop-blur-md border border-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] rounded-lg text-[var(--brand-blue)] transition-all duration-300 ease-out p-2.5 sm:p-3 relative overflow-hidden group hover:bg-gradient-to-br hover:from-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] hover:to-[color-mix(in_srgb,var(--brand-blue)_12%,transparent)] hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_25px_color-mix(in_srgb,var(--brand-blue)_25%,transparent),0_4px_12px_rgba(0,0,0,0.15)] hover:border-[color-mix(in_srgb,var(--brand-blue)_40%,transparent)] active:-translate-y-px active:scale-[1.02]'
    >
      {/* Shine effect */}
      <span className='absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[color-mix(in_srgb,var(--brand-blue)_15%,transparent)] to-transparent transition-all duration-500 group-hover:left-full' />
      <GitHubIcon
        sx={{ fontSize: '1.1rem' }}
        className='[filter:drop-shadow(var(--shadow-dropdown))] transition-all duration-300 group-hover:-rotate-[5deg] group-hover:scale-110 group-hover:[filter:drop-shadow(0_4px_8px_color-mix(in_srgb,var(--brand-blue)_40%,transparent))]'
      />
    </a>
  );
}
