import { InlineLoader } from 'components';

export default function Skeleton() {
  return (
    <main className='relative w-full min-h-screen flex flex-col'>
      <div className='relative z-1 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex-1'>
        {/* Header skeleton */}
        <div className='mb-6 sm:mb-12 flex items-center gap-4 sm:gap-6'>
          <div className='w-12 h-12 sm:w-20 sm:h-20 rounded-2xl bg-white/5 animate-pulse border border-white/5' />
          <div className='flex flex-col gap-2'>
            <div className='h-8 sm:h-10 w-32 sm:w-48 bg-white/5 rounded-lg animate-pulse' />
            <div className='flex gap-2'>
              <div className='h-5 sm:h-6 w-12 sm:w-16 bg-white/5 rounded-md animate-pulse' />
              <div className='h-5 sm:h-6 w-12 sm:w-16 bg-white/5 rounded-md animate-pulse' />
            </div>
          </div>
        </div>

        {/* Chart & Price Card placeholders */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8'>
          {/* Chart Section */}
          <div className='lg:col-span-8'>
            {/* Time buttons skeleton */}
            <div className='flex justify-end mb-4 sm:mb-6'>
              <div className='h-8 w-48 bg-white/5 rounded-xl animate-pulse' />
            </div>
            {/* Chart area */}
            <div className='h-[250px] sm:h-[350px] md:h-[450px] rounded-3xl bg-white/5 animate-pulse flex items-center justify-center border border-white/5'>
              <InlineLoader text='Loading chart...' />
            </div>
          </div>

          {/* Price Card Section */}
          <div className='lg:col-span-4 space-y-6'>
            {/* Price */}
            <div className='h-10 sm:h-14 w-48 bg-white/5 rounded-xl animate-pulse' />

            {/* Range Bar */}
            <div className='h-24 sm:h-28 rounded-2xl bg-white/5 animate-pulse border border-white/5' />

            {/* Price Change Grid */}
            <div className='grid grid-cols-3 gap-2 sm:gap-3'>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className='h-20 sm:h-24 rounded-xl bg-white/5 animate-pulse border border-white/5'
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats, Exchange & Links placeholders */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12'>
          {/* Stats Grid */}
          <div className='lg:col-span-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6'>
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className='h-24 sm:h-28 rounded-2xl bg-white/5 animate-pulse border border-white/5'
                />
              ))}
            </div>
          </div>

          {/* Exchange & Links */}
          <div className='lg:col-span-4 flex flex-col gap-6'>
            {/* Exchange */}
            <div className='h-[300px] rounded-3xl bg-white/5 animate-pulse border border-white/5 flex items-center justify-center'>
              <InlineLoader text='Loading exchange...' />
            </div>

            {/* Links */}
            <div className='space-y-4 mt-4'>
              {/* Header with lines simulation */}
              <div className='flex items-center gap-4'>
                <div className='h-px flex-1 bg-white/5' />
                <div className='h-3 w-24 bg-white/5 rounded animate-pulse' />
                <div className='h-px flex-1 bg-white/5' />
              </div>

              <div className='flex flex-wrap gap-2'>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className='h-8 w-24 rounded-xl bg-white/5 animate-pulse border border-white/5'
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
