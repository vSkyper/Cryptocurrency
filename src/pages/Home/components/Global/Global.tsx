import { useState, memo } from 'react';
import { Cards, Description, Switch } from './components';
import { GlobalProps } from './interface';

function Global(props: GlobalProps) {
  const { globalData } = props;

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <div className='mb-6 sm:mb-8'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          <div className='flex-1'>
            <h1 className='text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white'>
              Global Cryptocurrency Market
            </h1>
            <Description globalData={globalData} />
          </div>
          <div className='hidden md:flex md:justify-end'>
            <Switch toggle={toggle} setToggle={setToggle} mobile={false} />
          </div>
        </div>

        <div className='md:hidden pt-8'>
          <Switch toggle={toggle} setToggle={setToggle} mobile />
        </div>
      </div>

      <div
        className={`transition-all duration-150 ease-out ${
          toggle
            ? 'max-h-[1000px] opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        style={{
          transform: 'translateZ(0)',
          willChange: 'max-height, opacity',
        }}
      >
        <Cards toggle={toggle} globalData={globalData} />
      </div>
    </>
  );
}

export default memo(Global);
