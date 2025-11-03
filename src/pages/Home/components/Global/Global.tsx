import { useState } from 'react';
import { Cards, Description, Switch } from './components';
import { GlobalProps } from './interface';
import { HOME } from 'styles/styles';

export default function Global({ globalData }: GlobalProps) {
  const [toggle, setToggle] = useState<boolean>(false);

  const cardsTransitionClasses = toggle
    ? HOME.global.cardsVisible
    : HOME.global.cardsHidden;

  return (
    <>
      <div className={HOME.global.container}>
        <div className={HOME.global.header}>
          {/* Header and Description */}
          <div className={HOME.global.headerContent}>
            <h1 className={HOME.global.title}>Global Cryptocurrency Market</h1>
            <Description globalData={globalData} />
          </div>

          {/* Desktop Switch */}
          <div className={HOME.global.switchDesktop}>
            <Switch toggle={toggle} setToggle={setToggle} mobile={false} />
          </div>
        </div>

        {/* Mobile Switch */}
        <div className={HOME.global.switchMobile}>
          <Switch toggle={toggle} setToggle={setToggle} mobile />
        </div>
      </div>

      {/* Stats Cards with Animation */}
      <div
        className={`${HOME.global.cardsTransition} ${cardsTransitionClasses}`}
        style={{
          transitionDelay: toggle ? '0ms' : '500ms',
          marginBottom: toggle ? '1.5rem' : '0',
          transition: toggle
            ? 'max-height 700ms ease-out, opacity 700ms ease-out, margin-bottom 0ms'
            : 'max-height 700ms ease-out, opacity 700ms ease-out, margin-bottom 0ms 700ms',
        }}
      >
        <Cards toggle={toggle} globalData={globalData} />
      </div>
    </>
  );
}
