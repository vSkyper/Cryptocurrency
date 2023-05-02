import { Grid, Chip, Avatar } from '@mui/material';
import {
  Reddit as RedditIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { ICoin } from '../../../../interfaces';

interface Props {
  data: ICoin;
}

export default function Links({ data }: Props) {
  return (
    <Grid container sx={{ ml: 2, mt: 2 }}>
      {data.links.homepage[0] && (
        <Chip
          avatar={<Avatar alt='logo' src={data.image.large} />}
          label='Homepage'
          component='a'
          href={data.links.homepage[0]}
          clickable
          sx={{ mr: 2, mt: 1, mb: 1 }}
        />
      )}
      {data.links.blockchain_site.map(
        (blockchain) =>
          blockchain && (
            <Chip
              key={blockchain}
              label={new URL(blockchain).hostname}
              component='a'
              href={blockchain}
              clickable
              sx={{ mr: 2, mt: 1, mb: 1 }}
            />
          )
      )}
      {data.links.official_forum_url[0] && (
        <Chip
          label='Forum'
          component='a'
          href={data.links.official_forum_url[0]}
          clickable
          sx={{ mr: 2, mt: 1, mb: 1 }}
        />
      )}
      {data.links.subreddit_url && (
        <Chip
          avatar={<RedditIcon />}
          label='Reddit'
          component='a'
          href={data.links.subreddit_url}
          clickable
          sx={{ mr: 2, mt: 1, mb: 1 }}
        />
      )}
      {data.links.twitter_screen_name && (
        <Chip
          avatar={<TwitterIcon />}
          label='Twitter'
          component='a'
          href={`https://twitter.com/${data.links.twitter_screen_name}/`}
          clickable
          sx={{ mr: 2, mt: 1, mb: 1 }}
        />
      )}
      {data.links.facebook_username && (
        <Chip
          avatar={<FacebookIcon />}
          label='Facebook'
          component='a'
          href={`https://www.facebook.com/${data.links.facebook_username}/`}
          clickable
          sx={{ mr: 2, mt: 1, mb: 1 }}
        />
      )}
      {data.links.repos_url.github[0] && (
        <Chip
          avatar={<GitHubIcon />}
          label='GitHub'
          component='a'
          href={data.links.repos_url.github[0]}
          clickable
          sx={{ mr: 2, mt: 1, mb: 1 }}
        />
      )}
    </Grid>
  );
};