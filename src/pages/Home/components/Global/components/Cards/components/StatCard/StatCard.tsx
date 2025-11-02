import { useState, useEffect } from 'react';
import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@mui/icons-material';
import { StatCardProps } from './interface';
import { CARD, HOME } from 'styles/styles';

export default function StatCard({
  config,
  toggle,
}: Omit<StatCardProps, 'isMobile'>) {
  const [show, setShow] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (toggle) {
      setIsExiting(false);
      const timer = setTimeout(() => setShow(true), config.timeout);
      return () => clearTimeout(timer);
    } else {
      setIsExiting(true);
      const reverseDelay = 400 - config.timeout;
      const timer = setTimeout(() => setShow(false), reverseDelay);
      return () => clearTimeout(timer);
    }
  }, [toggle, config.timeout]);

  const hasPercentage = !!config.percentage;
  const isNegative = config.percentage ? config.percentage.change < 0 : false;

  const animationClasses = show
    ? HOME.statCard.animation.visible
    : isExiting
    ? HOME.statCard.animation.exiting
    : HOME.statCard.animation.hidden;

  const badgeColorClasses = isNegative
    ? HOME.statCard.badge.negative
    : HOME.statCard.badge.positive;

  const TrendIcon = isNegative ? TrendingDownIcon : TrendingUpIcon;

  return (
    <div
      className={`${HOME.statCard.animation.wrapper} ${animationClasses}`}
      style={{
        transitionDelay: show ? `${config.timeout}ms` : '0ms',
      }}
    >
      <div className={`${HOME.statCard.base} ${CARD.tertiary}`}>
        <div className={HOME.statCard.content}>
          <div className={HOME.statCard.valueWrapper}>
            {/* Mobile value - shorter */}
            {config.mobileValue && (
              <h3 className={HOME.statCard.valueMobile}>
                {config.mobileValue}
              </h3>
            )}
            {/* Desktop value - full */}
            <h3
              className={
                config.mobileValue
                  ? HOME.statCard.valueDesktopHidden
                  : HOME.statCard.valueDesktop
              }
            >
              {config.value}
            </h3>

            {hasPercentage && config.percentage && (
              <span
                className={`${HOME.statCard.badge.base} ${badgeColorClasses}`}
              >
                {config.percentage.value}
                <TrendIcon sx={HOME.statCard.badge.iconSize} />
              </span>
            )}
          </div>
        </div>

        <p className={HOME.statCard.label}>{config.label}</p>
      </div>
    </div>
  );
}
