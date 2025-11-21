import { InlineLoaderProps } from './interface';

export default function InlineLoader({
  className = '',
  text = 'Loading...',
}: InlineLoaderProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className='relative'>
        <div className='animate-spin h-10 w-10 border-4 border-white/20 border-t-transparent rounded-full' />
      </div>
      <div className='mt-3 text-sm text-white/60'>{text}</div>
    </div>
  );
}
