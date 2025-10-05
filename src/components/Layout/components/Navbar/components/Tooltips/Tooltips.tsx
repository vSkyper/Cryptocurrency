import { GitHub as GitHubIcon } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { GitHubButton } from './styled';

export default function Tooltips() {
  return (
    <Tooltip title='View GitHub Repository' arrow placement='bottom'>
      <GitHubButton
        color='inherit'
        size='medium'
        href='https://github.com/vSkyper/cryptocurrency'
        component='a'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GitHubIcon />
      </GitHubButton>
    </Tooltip>
  );
}
