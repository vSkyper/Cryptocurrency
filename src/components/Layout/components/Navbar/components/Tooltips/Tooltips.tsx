import { GitHub as GitHubIcon } from '@mui/icons-material';

const GITHUB_URL = 'https://github.com/vSkyper/cryptocurrency';

export default function Tooltips() {
  return (
    <a
      href={GITHUB_URL}
      target='_blank'
      rel='noopener noreferrer'
      title='View GitHub Repository'
      className='flex items-center justify-center backdrop-blur-md rounded-lg sm:rounded-xl transition-all duration-300 ease-out p-1.5 sm:p-3 relative overflow-hidden group bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:border-(--brand-blue)/30 active:-translate-y-px active:scale-[1.02] text-(--brand-blue)'
    >
      <span className='absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-all duration-500 group-hover:left-full' />
      <GitHubIcon className='text-[0.9rem]! sm:text-[1.1rem]! transition-all duration-300 group-hover:-rotate-[5deg] group-hover:scale-110 group-hover:text-(--brand-blue)' />
    </a>
  );
}
