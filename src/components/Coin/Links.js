import { useContext } from 'react';
import { Grid, Chip, Avatar } from '@material-ui/core';
import {
  Reddit as RedditIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
} from '@material-ui/icons';
import { Context } from '../../Context';

const Links = () => {
  const { coin } = useContext(Context);

  return (
    <Grid container sx={{ ml: 2, mt: 2 }}>
      {coin.links.homepage[0] && (
        <Chip
          avatar={<Avatar alt='Natacha' src={coin.image.large} />}
          label='Homepage'
          component='a'
          href={coin.links.homepage[0]}
          clickable
          sx={{ mr: 2, mt: 1, mb: 1 }}
        />
      )}
      {coin.links.blockchain_site.map(
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
      {coin.links.official_forum_url[0] && (
        <Chip
          label='Forum'
          component='a'
          href={coin.links.official_forum_url[0]}
          clickable
          sx={{ mr: 2, mt: 1, mb: 1 }}
        />
      )}
      {coin.links.subreddit_url && (
        <Chip
          avatar={<RedditIcon />}
          label='Reddit'
          component='a'
          href={coin.links.subreddit_url}
          clickable
          sx={{ mr: 2, mt: 1, mb: 1 }}
        />
      )}
      {coin.links.twitter_screen_name && (
        <Chip
          avatar={<TwitterIcon />}
          label='Twitter'
          component='a'
          href={`https://twitter.com/${coin.links.twitter_screen_name}`}
          clickable
          sx={{ mr: 2, mt: 1, mb: 1 }}
        />
      )}
      {coin.links.facebook_username && (
        <Chip
          avatar={<FacebookIcon />}
          label='Facebook'
          component='a'
          href={`https://www.facebook.com/${coin.links.facebook_username}`}
          clickable
          sx={{ mr: 2, mt: 1, mb: 1 }}
        />
      )}
      {coin.links.repos_url.github[0] && (
        <Chip
          avatar={<GitHubIcon />}
          label='GitHub'
          component='a'
          href={coin.links.repos_url.github[0]}
          clickable
          sx={{ mr: 2, mt: 1, mb: 1 }}
        />
      )}
    </Grid>
  );
};

export default Links;
