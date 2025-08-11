import { Avatar, Typography, Box } from '@mui/material';
import {
  Reddit as RedditIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  Language as WebsiteIcon,
  Forum as ForumIcon,
} from '@mui/icons-material';
import { LinksProps } from './interface';
import { ModernLinksCard, StyledChip } from './styled';

export default function Links(props: LinksProps) {
  const { data } = props;

  return (
    <ModernLinksCard>
      <Typography
        variant='h6'
        sx={{
          mb: 2,
          fontWeight: 700,
          fontSize: '1.1rem',
          background: (theme) => `linear-gradient(135deg, 
              ${theme.palette.text.primary}, 
              ${theme.palette.primary.main}aa
            )`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          zIndex: 1,
          position: 'relative',
        }}
      >
        Official Links & Community
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          zIndex: 1,
          position: 'relative',
        }}
      >
        {data.links?.homepage?.[0] && (
          <StyledChip
            avatar={
              <Avatar
                alt='logo'
                src={data.image?.large}
                sx={{ width: 20, height: 20 }}
              />
            }
            label='Homepage'
            component='a'
            href={data.links.homepage[0]}
            clickable
          />
        )}

        {data.links?.blockchain_site
          ?.slice(0, 3)
          .map(
            (blockchain) =>
              blockchain && (
                <StyledChip
                  key={blockchain}
                  icon={<WebsiteIcon sx={{ fontSize: 16 }} />}
                  label={new URL(blockchain).hostname.replace('www.', '')}
                  component='a'
                  href={blockchain}
                  clickable
                />
              )
          )}

        {data.links?.official_forum_url?.[0] && (
          <StyledChip
            icon={<ForumIcon sx={{ fontSize: 16 }} />}
            label='Forum'
            component='a'
            href={data.links.official_forum_url[0]}
            clickable
          />
        )}

        {data.links?.subreddit_url && (
          <StyledChip
            icon={<RedditIcon sx={{ fontSize: 16 }} />}
            label='Reddit'
            component='a'
            href={data.links.subreddit_url}
            clickable
            sx={{
              background:
                'linear-gradient(135deg, rgba(255, 87, 34, 0.2) 0%, rgba(255, 87, 34, 0.1) 100%)',
              border: '1px solid rgba(255, 87, 34, 0.3)',
              color: '#ff5722',
              '&:hover': {
                background:
                  'linear-gradient(135deg, rgba(255, 87, 34, 0.3) 0%, rgba(255, 87, 34, 0.15) 100%)',
                boxShadow: '0 2px 5px rgba(255, 87, 34, 0.4)',
              },
            }}
          />
        )}

        {data.links?.twitter_screen_name && (
          <StyledChip
            icon={<TwitterIcon sx={{ fontSize: 16 }} />}
            label='Twitter'
            component='a'
            href={`https://twitter.com/${data.links.twitter_screen_name}/`}
            clickable
            sx={{
              background:
                'linear-gradient(135deg, rgba(29, 161, 242, 0.2) 0%, rgba(29, 161, 242, 0.1) 100%)',
              border: '1px solid rgba(29, 161, 242, 0.3)',
              color: '#1da1f2',
              '&:hover': {
                background:
                  'linear-gradient(135deg, rgba(29, 161, 242, 0.3) 0%, rgba(29, 161, 242, 0.15) 100%)',
                boxShadow: '0 2px 5px rgba(29, 161, 242, 0.4)',
              },
            }}
          />
        )}

        {data.links?.facebook_username && (
          <StyledChip
            icon={<FacebookIcon sx={{ fontSize: 16 }} />}
            label='Facebook'
            component='a'
            href={`https://www.facebook.com/${data.links.facebook_username}/`}
            clickable
            sx={{
              background:
                'linear-gradient(135deg, rgba(66, 103, 178, 0.2) 0%, rgba(66, 103, 178, 0.1) 100%)',
              border: '1px solid rgba(66, 103, 178, 0.3)',
              color: '#7593ceff',
              '&:hover': {
                background:
                  'linear-gradient(135deg, rgba(66, 103, 178, 0.3) 0%, rgba(66, 103, 178, 0.15) 100%)',
                boxShadow: '0 2px 5px rgba(66, 103, 178, 0.4)',
              },
            }}
          />
        )}

        {data.links?.repos_url?.github?.[0] && (
          <StyledChip
            icon={<GitHubIcon sx={{ fontSize: 16 }} />}
            label='GitHub'
            component='a'
            href={data.links.repos_url.github[0]}
            clickable
            sx={{
              background:
                'linear-gradient(135deg, rgba(88, 96, 105, 0.2) 0%, rgba(88, 96, 105, 0.1) 100%)',
              border: '1px solid rgba(88, 96, 105, 0.3)',
              color: '#838b94ff',
              '&:hover': {
                background:
                  'linear-gradient(135deg, rgba(88, 96, 105, 0.3) 0%, rgba(88, 96, 105, 0.15) 100%)',
                boxShadow: '0 2px 5px rgba(88, 96, 105, 0.4)',
              },
            }}
          />
        )}
      </Box>
    </ModernLinksCard>
  );
}
