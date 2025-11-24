export default function Skeleton() {
  return (
    <main className='relative w-full min-h-screen flex flex-col'>
      <div className='relative z-1 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex-1'>
        {/* Global Header Skeleton */}
        <div className='mb-8 sm:mb-12'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
            <div className='flex-1 space-y-4'>
              {/* Title */}
              <div className='h-8 sm:h-10 w-64 sm:w-96 bg-white/5 rounded-lg animate-pulse' />
              {/* Description */}
              <div className='space-y-2'>
                <div className='h-4 w-full max-w-2xl bg-white/5 rounded animate-pulse' />
                <div className='h-4 w-full max-w-xl bg-white/5 rounded animate-pulse' />
              </div>
            </div>
            {/* Switch Button */}
            <div className='hidden md:block'>
              <div className='h-10 w-32 bg-white/5 rounded-full animate-pulse' />
            </div>
          </div>
        </div>

        {/* Table Skeleton */}
        <div className='mt-6 sm:mt-8 w-full rounded-3xl bg-[#0a0a0f]/40 backdrop-blur-[20px] border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden'>
          {/* Table Header */}
          <div className='grid grid-cols-2 md:grid-cols-12 gap-4 px-6 py-4 border-b border-white/5'>
            <div className='col-span-1 md:col-span-2 h-3 w-12 bg-white/5 rounded animate-pulse' />{' '}
            {/* Name */}
            <div className='hidden md:block col-span-1 h-3 w-8 bg-white/5 rounded animate-pulse mx-auto' />{' '}
            {/* Symbol */}
            <div className='col-span-1 md:col-span-1 h-3 w-12 bg-white/5 rounded animate-pulse ml-auto md:ml-0' />{' '}
            {/* Price */}
            <div className='hidden md:block col-span-1 h-3 w-8 bg-white/5 rounded animate-pulse' />{' '}
            {/* 1h */}
            <div className='hidden md:block col-span-1 h-3 w-8 bg-white/5 rounded animate-pulse' />{' '}
            {/* 24h */}
            <div className='hidden md:block col-span-1 h-3 w-8 bg-white/5 rounded animate-pulse' />{' '}
            {/* 7d */}
            <div className='hidden md:block col-span-1 h-3 w-16 bg-white/5 rounded animate-pulse' />{' '}
            {/* Volume */}
            <div className='hidden md:block col-span-2 h-3 w-16 bg-white/5 rounded animate-pulse' />{' '}
            {/* Mkt Cap */}
            <div className='hidden md:block col-span-2 h-3 w-16 bg-white/5 rounded animate-pulse' />{' '}
            {/* Last 7 Days */}
          </div>

          {/* Table Rows */}
          <div>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className='grid grid-cols-2 md:grid-cols-12 gap-4 px-6 py-4 border-b border-white/5 last:border-0 items-center'
              >
                {/* Name & Icon */}
                <div className='col-span-1 md:col-span-2 flex items-center gap-3'>
                  <div className='w-8 h-8 rounded-full bg-white/5 animate-pulse shrink-0' />
                  <div className='h-4 w-20 bg-white/5 rounded animate-pulse' />
                </div>

                {/* Symbol */}
                <div className='hidden md:flex col-span-1 justify-center'>
                  <div className='h-5 w-10 bg-white/5 rounded-lg animate-pulse' />
                </div>

                {/* Price */}
                <div className='col-span-1 md:col-span-1 flex justify-end md:justify-start'>
                  <div className='h-4 w-16 bg-white/5 rounded animate-pulse' />
                </div>

                {/* 1h */}
                <div className='hidden md:block col-span-1'>
                  <div className='h-4 w-10 bg-white/5 rounded animate-pulse' />
                </div>

                {/* 24h */}
                <div className='hidden md:block col-span-1'>
                  <div className='h-4 w-10 bg-white/5 rounded animate-pulse' />
                </div>

                {/* 7d */}
                <div className='hidden md:block col-span-1'>
                  <div className='h-4 w-10 bg-white/5 rounded animate-pulse' />
                </div>

                {/* Volume */}
                <div className='hidden md:block col-span-1'>
                  <div className='h-4 w-16 bg-white/5 rounded animate-pulse' />
                </div>

                {/* Mkt Cap */}
                <div className='hidden md:block col-span-2'>
                  <div className='h-4 w-20 bg-white/5 rounded animate-pulse' />
                </div>

                {/* Last 7 Days (Sparkline) */}
                <div className='hidden md:block col-span-2'>
                  <div className='h-8 w-24 bg-white/5 rounded animate-pulse' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
