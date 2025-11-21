import { CircularProgress } from '@mui/material';

export default function LoadingModal() {
  return (
    <div className='fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200'>
      <div className='relative w-full max-w-md overflow-hidden rounded-3xl bg-[#0f0f16]/90 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl p-6 sm:p-8 transform transition-all animate-in zoom-in-95 duration-200'>
        <div className='flex flex-col items-center justify-center gap-6'>
          <div className='relative'>
            <div className='absolute inset-0 rounded-full blur-xl bg-(--brand-blue)/20 animate-pulse' />
            <CircularProgress
              size={60}
              thickness={4}
              sx={{
                color: 'var(--brand-blue)',
                filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.3))',
              }}
            />
          </div>
          <div className='text-lg font-bold text-white/80 tracking-wide animate-pulse'>
            Loading Data...
          </div>
        </div>
      </div>
    </div>
  );
}
