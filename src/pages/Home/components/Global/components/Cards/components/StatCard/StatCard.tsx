import { Grid, Grow } from '@mui/material';
import { memo } from 'react';
import {
  TrendingUpRounded as TrendingUpIcon,
  TrendingDownRounded as TrendingDownIcon,
} from '@mui/icons-material';
import { StatCardProps } from './interface';
import { CardTitle, PercentageChip, CardSubtitle, Card } from './styled';

function StatCard({ config, toggle, isMobile }: StatCardProps) {
  return (
    <Grow in={toggle} timeout={isMobile ? 0 : config.timeout}>
      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
        <Card>
          <CardTitle variant='h6' hasPercentage={!!config.percentage}>
            {config.value}
            {config.percentage && (
              <PercentageChip isNegative={config.percentage.change < 0}>
                {config.percentage.value}
                {config.percentage.change < 0 ? (
                  <TrendingDownIcon />
                ) : (
                  <TrendingUpIcon />
                )}
              </PercentageChip>
            )}
          </CardTitle>
          <CardSubtitle variant='body2'>{config.label}</CardSubtitle>
        </Card>
      </Grid>
    </Grow>
  );
}

export default memo(StatCard);
