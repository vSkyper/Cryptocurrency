import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useThemeContext } from '../../../../store';

export default function Tooltips() {
  const { themeMode, setThemeMode } = useThemeContext();

  return (
    <>
      <Tooltip title='GitHub repository'>
        <IconButton
          color='inherit'
          size='large'
          href='https://github.com/vSkyper/react_cryptocurrency'
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='Toggle light/dark theme'>
        <IconButton
          color='inherit'
          size='large'
          onClick={() => setThemeMode(!themeMode)}
        >
          {themeMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Tooltip>
    </>
  )
}