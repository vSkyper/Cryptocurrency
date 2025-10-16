import { useState } from 'react';
import { Cards, Description, Switch } from './components';
import { GlobalProps } from './interface';

export default function Global({ globalData }: GlobalProps) {
  const [toggle, setToggle] = useState<boolean>(false);

  const cardsTransitionClasses = toggle
    ? 'max-h-[1000px] opacity-100'
    : 'max-h-0 opacity-0 overflow-hidden';

  return (
    <>
      <div className='mb-6 sm:mb-8'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          {/* Header and Description */}
          <div className='flex-1'>
            <h1 className='text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white'>
              Global Cryptocurrency Market
            </h1>
            <Description globalData={globalData} />
          </div>

          {/* Desktop Switch */}
          <div className='hidden md:flex md:justify-end'>
            <Switch toggle={toggle} setToggle={setToggle} mobile={false} />
          </div>
        </div>

        {/* Mobile Switch */}
        <div className='md:hidden pt-8'>
          <Switch toggle={toggle} setToggle={setToggle} mobile />
        </div>
      </div>

      {/* Stats Cards with Animation */}
      <div
        className={`transition-all duration-700 ease-out transform-gpu will-change-[max-height,opacity] ${cardsTransitionClasses}`}
        style={{
          transitionDelay: toggle ? '0ms' : '500ms',
        }}
      >
        <Cards toggle={toggle} globalData={globalData} />
      </div>
    </>
  );
}
