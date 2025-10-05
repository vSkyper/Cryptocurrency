import { Grid, Typography, Grow } from '@mui/material';
import { memo } from 'react';
import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@mui/icons-material';
import { Card, Percentage } from 'styled';
import { StatCardProps } from './interface';

const CARD_STYLES = {
  title: {
    fontWeight: 700,
    mb: 1.5,
    fontSize: { xs: '1.1rem', sm: '1.25rem' },
  },
  subtitle: {
    fontWeight: 500,
    color: 'text.secondary',
    textAlign: 'center',
    fontSize: { xs: '0.8rem', sm: '0.875rem' },
    letterSpacing: '0.3px',
  },
} as const;

function StatCard({ config, toggle, isMobile }: StatCardProps) {
  return (
    <Grow in={toggle} timeout={isMobile ? 0 : config.timeout}>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
        <Card>
          <Typography
            variant='h6'
            sx={{
              ...CARD_STYLES.title,
              color: 'text.primary',
              display: config.percentage ? 'flex' : 'block',
              justifyContent: config.percentage ? 'center' : 'normal',
              alignItems: config.percentage ? 'center' : 'normal',
            }}
          >
            {config.value}
            {config.percentage && (
              <Percentage
                sx={{
                  color: config.percentage.change < 0 ? '#ff6b6b' : '#51cf66',
                  borderColor:
                    config.percentage.change < 0
                      ? 'rgba(255, 107, 107, 0.3)'
                      : 'rgba(81, 207, 102, 0.3)',
                  background:
                    config.percentage.change < 0
                      ? 'rgba(255, 107, 107, 0.12)'
                      : 'rgba(81, 207, 102, 0.12)',
                }}
              >
                {config.percentage.value}
                {config.percentage.change < 0 ? (
                  <TrendingDownIcon />
                ) : (
                  <TrendingUpIcon />
                )}
              </Percentage>
            )}
          </Typography>
          <Typography variant='body2' sx={CARD_STYLES.subtitle}>
            {config.label}
          </Typography>
        </Card>
      </Grid>
    </Grow>
  );
}

export default memo(StatCard);
