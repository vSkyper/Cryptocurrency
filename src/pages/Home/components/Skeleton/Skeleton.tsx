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
        <div className='mt-6 sm:mt-8 w-full rounded-3xl bg-[#0a0a0f]/40 backdrop-blur-[20px] border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col'>
          {/* Market Overview Header */}
          <div className='p-3 sm:p-5 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-black/20 rounded-t-3xl'>
            <div className='h-7 w-40 bg-white/5 rounded-lg animate-pulse hidden sm:block' />
            <div className='flex items-center gap-2 sm:gap-3 w-full sm:w-auto'>
              <div className='h-8 sm:h-10 w-full sm:w-64 bg-white/5 rounded-xl animate-pulse' />
              <div className='h-8 sm:h-10 w-20 sm:w-24 bg-white/5 rounded-xl animate-pulse' />
            </div>
          </div>

          {/* Table Content */}
          <div className='overflow-hidden'>
            {/* Header */}
            <div className='grid grid-cols-12 gap-4 px-4 py-4 border-b border-white/5 bg-black/10'>
              {/* Name (Left) */}
              <div className='col-span-4 sm:col-span-3 flex items-center'>
                <div className='h-3 w-16 bg-white/5 rounded animate-pulse' />
              </div>
              {/* Symbol (Center) */}
              <div className='hidden sm:flex col-span-1 justify-center'>
                <div className='h-3 w-8 bg-white/5 rounded animate-pulse' />
              </div>
              {/* Price (Right) */}
              <div className='col-span-4 sm:col-span-2 flex justify-end'>
                <div className='h-3 w-16 bg-white/5 rounded animate-pulse' />
              </div>
              {/* 1h (Center) */}
              <div className='hidden sm:flex col-span-1 justify-center'>
                <div className='h-3 w-8 bg-white/5 rounded animate-pulse' />
              </div>
              {/* 24h (Center) */}
              <div className='hidden sm:flex col-span-1 justify-center'>
                <div className='h-3 w-8 bg-white/5 rounded animate-pulse' />
              </div>
              {/* 7d (Center) */}
              <div className='hidden sm:flex col-span-1 justify-center'>
                <div className='h-3 w-8 bg-white/5 rounded animate-pulse' />
              </div>
              {/* Volume (Right) */}
              <div className='hidden sm:flex col-span-1 justify-end'>
                <div className='h-3 w-12 bg-white/5 rounded animate-pulse' />
              </div>
              {/* Mkt Cap (Right) */}
              <div className='hidden sm:flex col-span-1 justify-end'>
                <div className='h-3 w-12 bg-white/5 rounded animate-pulse' />
              </div>
              {/* Chart (Center) */}
              <div className='col-span-4 sm:col-span-1 flex justify-center'>
                <div className='h-3 w-12 bg-white/5 rounded animate-pulse' />
              </div>
            </div>

            {/* Rows */}
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className='grid grid-cols-12 gap-4 px-4 py-4 border-b border-white/5 last:border-0 items-center hover:bg-white/5 transition-colors'
              >
                {/* Name (Left) */}
                <div className='col-span-4 sm:col-span-3 flex items-center gap-3'>
                  <div className='w-8 h-8 rounded-full bg-white/5 animate-pulse shrink-0' />
                  <div className='h-4 w-24 bg-white/5 rounded animate-pulse' />
                </div>
                {/* Symbol (Center) */}
                <div className='hidden sm:flex col-span-1 justify-center'>
                  <div className='h-4 w-10 bg-white/5 rounded animate-pulse' />
                </div>
                {/* Price (Right) */}
                <div className='col-span-4 sm:col-span-2 flex justify-end'>
                  <div className='h-4 w-20 bg-white/5 rounded animate-pulse' />
                </div>
                {/* 1h (Center) */}
                <div className='hidden sm:flex col-span-1 justify-center'>
                  <div className='h-4 w-12 bg-white/5 rounded animate-pulse' />
                </div>
                {/* 24h (Center) */}
                <div className='hidden sm:flex col-span-1 justify-center'>
                  <div className='h-4 w-12 bg-white/5 rounded animate-pulse' />
                </div>
                {/* 7d (Center) */}
                <div className='hidden sm:flex col-span-1 justify-center'>
                  <div className='h-4 w-12 bg-white/5 rounded animate-pulse' />
                </div>
                {/* Volume (Right) */}
                <div className='hidden sm:flex col-span-1 justify-end'>
                  <div className='h-4 w-16 bg-white/5 rounded animate-pulse' />
                </div>
                {/* Mkt Cap (Right) */}
                <div className='hidden sm:flex col-span-1 justify-end'>
                  <div className='h-4 w-16 bg-white/5 rounded animate-pulse' />
                </div>
                {/* Chart (Center) */}
                <div className='col-span-4 sm:col-span-1 flex justify-center'>
                  <div className='h-8 w-20 bg-white/5 rounded animate-pulse' />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Skeleton */}
          <div className='flex items-center justify-end gap-4 p-4 border-t border-white/5'>
            <div className='h-8 w-32 bg-white/5 rounded animate-pulse' />
            <div className='h-8 w-24 bg-white/5 rounded animate-pulse' />
          </div>
        </div>
      </div>
    </main>
  );
}
