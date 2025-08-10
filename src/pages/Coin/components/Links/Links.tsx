import { Grid, Chip, Avatar } from '@mui/material';
import {
  Reddit as RedditIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { LinksProps } from './interface';

export default function Links(props: LinksProps) {
  const { data } = props;

  return (
    <Grid container sx={{ ml: 1, mt: 1 }}>
      {data.links?.homepage?.[0] && (
        <Chip
          avatar={
            <Avatar
              alt='logo'
              src={data.image?.large}
              sx={{ width: 24, height: 24 }}
            />
          }
          label='Homepage'
          component='a'
          href={data.links.homepage[0]}
          variant='outlined'
          clickable
          sx={{
            mr: 1,
            mt: 1,
            mb: 1,
            borderRadius: 999,
            borderStyle: 'dashed',
            transition: 'all 180ms ease',
            bgcolor: 'background.paper',
            '&:hover': {
              boxShadow: 2,
              transform: 'translateY(-1px)',
            },
          }}
        />
      )}
      {data.links?.blockchain_site?.map(
        (blockchain) =>
          blockchain && (
            <Chip
              key={blockchain}
              label={new URL(blockchain).hostname}
              component='a'
              href={blockchain}
              variant='outlined'
              clickable
              sx={{
                mr: 1,
                mt: 1,
                mb: 1,
                borderRadius: 999,
                transition: 'all 180ms ease',
                bgcolor: 'background.paper',
                '&:hover': {
                  boxShadow: 2,
                  transform: 'translateY(-1px)',
                },
              }}
            />
          )
      )}
      {data.links?.official_forum_url?.[0] && (
        <Chip
          label='Forum'
          component='a'
          href={data.links.official_forum_url[0]}
          variant='outlined'
          clickable
          sx={{
            mr: 1,
            mt: 1,
            mb: 1,
            borderRadius: 999,
            transition: 'all 180ms ease',
            bgcolor: 'background.paper',
            '&:hover': {
              boxShadow: 2,
              transform: 'translateY(-1px)',
            },
          }}
        />
      )}
      {data.links?.subreddit_url && (
        <Chip
          avatar={<RedditIcon />}
          label='Reddit'
          component='a'
          href={data.links.subreddit_url}
          variant='outlined'
          clickable
          sx={{
            mr: 1,
            mt: 1,
            mb: 1,
            borderRadius: 999,
            transition: 'all 180ms ease',
            bgcolor: 'background.paper',
            '&:hover': {
              boxShadow: 2,
              transform: 'translateY(-1px)',
            },
          }}
        />
      )}
      {data.links?.twitter_screen_name && (
        <Chip
          avatar={<TwitterIcon />}
          label='Twitter'
          component='a'
          href={`https://twitter.com/${data.links.twitter_screen_name}/`}
          variant='outlined'
          clickable
          sx={{
            mr: 1,
            mt: 1,
            mb: 1,
            borderRadius: 999,
            transition: 'all 180ms ease',
            bgcolor: 'background.paper',
            '&:hover': {
              boxShadow: 2,
              transform: 'translateY(-1px)',
            },
          }}
        />
      )}
      {data.links?.facebook_username && (
        <Chip
          avatar={<FacebookIcon />}
          label='Facebook'
          component='a'
          href={`https://www.facebook.com/${data.links.facebook_username}/`}
          variant='outlined'
          clickable
          sx={{
            mr: 1,
            mt: 1,
            mb: 1,
            borderRadius: 999,
            transition: 'all 180ms ease',
            bgcolor: 'background.paper',
            '&:hover': {
              boxShadow: 2,
              transform: 'translateY(-1px)',
            },
          }}
        />
      )}
      {data.links?.repos_url?.github?.[0] && (
        <Chip
          avatar={<GitHubIcon />}
          label='GitHub'
          component='a'
          href={data.links.repos_url.github[0]}
          variant='outlined'
          clickable
          sx={{
            mr: 1,
            mt: 1,
            mb: 1,
            borderRadius: 999,
            transition: 'all 180ms ease',
            '&:hover': {
              boxShadow: 2,
              transform: 'translateY(-1px)',
            },
          }}
        />
      )}
    </Grid>
  );
}
