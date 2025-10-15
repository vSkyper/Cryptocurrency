import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ErrorModalProps } from './interface';

export default function ErrorModal({
  message = 'An unexpected error occurred. Please try again later.',
}: ErrorModalProps) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  const modal = (
    <div
      className='fixed inset-0 z-[9999] flex items-center justify-center px-4 sm:px-6'
      role='alertdialog'
      aria-modal='true'
      aria-label='Error dialog'
    >
      <div
        className='absolute inset-0 bg-black/50 backdrop-blur-sm z-[9000]'
        onClick={() => setOpen(false)}
      />

      <div className='relative z-[9999] max-w-lg w-full mx-auto pointer-events-auto'>
        <div className='rounded-lg overflow-hidden bg-gradient-to-b from-[#0b1220]/60 to-[#0b1220]/40 shadow-md backdrop-blur-sm'>
          <div className='px-8 py-6 sm:px-10 sm:py-6 flex items-center gap-4'>
            <div className='flex-shrink-0'>
              <div className='h-9 w-9 rounded-full bg-red-600/10 flex items-center justify-center'>
                <svg
                  className='h-5 w-5 text-red-400'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
            </div>

            <div className='min-w-0 flex-1'>
              <p className='text-sm font-semibold text-red-300'>Error</p>
              <p className='mt-1 text-sm text-slate-200'>{message}</p>
            </div>

            <div className='flex-shrink-0 self-start'>
              <button
                onClick={() => setOpen(false)}
                className='inline-flex items-center justify-center rounded-md bg-white/6 hover:bg-white/10 p-2 text-slate-200/90 focus:outline-none focus:ring-2 focus:ring-red-400'
                aria-label='Close error dialog'
              >
                <svg
                  className='h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
