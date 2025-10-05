import { Stack, Box, Chip } from '@mui/material';
import { CoinHeaderProps } from './interface';

export default function CoinHeader({
  name,
  symbol,
  image,
  marketCapRank,
}: CoinHeaderProps) {
  return (
    <Stack
      direction='row'
      alignItems='center'
      spacing={2}
      sx={{
        mb: 4,
      }}
    >
      <Box
        component='img'
        src={image}
        alt={name}
        sx={{
          width: { xs: 48, sm: 56 },
          height: { xs: 48, sm: 56 },
          borderRadius: '50%',
          boxShadow: '0 4px 12px rgba(64, 156, 255, 0.2)',
          border: '2px solid rgba(64, 156, 255, 0.2)',
        }}
      />
      <Stack spacing={0.5} sx={{ flex: 1 }}>
        <Stack
          direction='row'
          alignItems='center'
          spacing={1.5}
          flexWrap='wrap'
        >
          <Box
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem' },
              fontWeight: 700,
              color: 'text.primary',
              letterSpacing: '-0.02em',
            }}
          >
            {name}
          </Box>
          <Box
            component='span'
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
              fontWeight: 600,
              color: 'text.secondary',
              textTransform: 'uppercase',
            }}
          >
            {symbol?.toUpperCase()}
          </Box>
          {marketCapRank && (
            <Chip
              label={`#${marketCapRank}`}
              size='small'
              sx={{
                fontWeight: 700,
                fontSize: '0.75rem',
                height: 24,
                borderRadius: '12px',
                background: 'rgba(64, 156, 255, 0.15)',
                border: '1px solid rgba(64, 156, 255, 0.3)',
                color: '#409CFF',
                '& .MuiChip-label': {
                  px: 1,
                },
              }}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
