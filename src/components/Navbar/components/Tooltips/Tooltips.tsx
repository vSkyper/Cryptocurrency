import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

export default function Tooltips() {

  return (
    <>
      <Tooltip title='GitHub repository'>
        <IconButton
          color='inherit'
          size='large'
          href='https://github.com/vSkyper/cryptocurrency'
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
    </>
  )
}