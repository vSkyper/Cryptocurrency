import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ErrorModalProps } from './interface';

export default function ErrorModal({
  message = 'An unexpected error occurred. Please try again later.',
}: ErrorModalProps) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  const modal = (
    <div className='fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200'>
      <div className='relative w-full max-w-md overflow-hidden rounded-3xl bg-[#0f0f16]/90 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl p-6 sm:p-8 transform transition-all animate-in zoom-in-95 duration-200'>
        <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 mb-6 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.2)]'>
          <svg
            className='h-8 w-8 text-red-500'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>

        <h3 className='text-xl font-bold text-white text-center mb-2'>
          Something went wrong
        </h3>
        <p className='text-sm text-white/60 text-center leading-relaxed mb-8'>
          {message}
        </p>

        <button
          onClick={() => setOpen(false)}
          className='w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]'
        >
          Dismiss
        </button>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
