import { GitHub as GitHubIcon } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

export default function Tooltips() {
  return (
    <Tooltip title='GitHub repository'>
      <IconButton
        color='inherit'
        size='medium'
        href='https://github.com/vSkyper/cryptocurrency'
        sx={{
          background:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'rgba(255, 255, 255, 0.9)',
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          padding: { xs: 1, sm: 1.5 },
          '& .MuiSvgIcon-root': {
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
          },
          '&:hover': {
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          },
        }}
      >
        <GitHubIcon />
      </IconButton>
    </Tooltip>
  );
}
