import { GitHub as GitHubIcon } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

export default function Tooltips() {
  return (
    <Tooltip title='View GitHub Repository' arrow placement='bottom'>
      <IconButton
        color='inherit'
        size='medium'
        href='https://github.com/vSkyper/cryptocurrency'
        target='_blank'
        rel='noopener noreferrer'
        sx={{
          background:
            'linear-gradient(135deg, rgba(64, 156, 255, 0.12) 0%, rgba(64, 156, 255, 0.06) 100%)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(64, 156, 255, 0.2)',
          borderRadius: '12px',
          color: '#409CFF',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          padding: { xs: 1.5, sm: 2 },
          position: 'relative',
          overflow: 'hidden',
          '& .MuiSvgIcon-root': {
            fontSize: { xs: '1.2rem', sm: '1.3rem' },
            filter: 'drop-shadow(0 2px 4px rgba(64, 156, 255, 0.3))',
            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(90deg, transparent, rgba(64, 156, 255, 0.15), transparent)',
            transition: 'left 500ms cubic-bezier(0.4, 0, 0.2, 1)',
          },
          '&:hover': {
            background:
              'linear-gradient(135deg, rgba(64, 156, 255, 0.2) 0%, rgba(64, 156, 255, 0.12) 100%)',
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow:
              '0 8px 25px rgba(64, 156, 255, 0.25), 0 4px 12px rgba(0,0,0,0.15)',
            border: '1px solid rgba(64, 156, 255, 0.4)',
            '& .MuiSvgIcon-root': {
              transform: 'rotate(-5deg) scale(1.1)',
              filter: 'drop-shadow(0 4px 8px rgba(64, 156, 255, 0.4))',
            },
            '&::before': {
              left: '100%',
            },
          },
          '&:active': {
            transform: 'translateY(-1px) scale(1.02)',
          },
        }}
      >
        <GitHubIcon />
      </IconButton>
    </Tooltip>
  );
}
