import { Chip, Avatar, Typography, Box } from '@mui/material';
import {
  Reddit as RedditIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  Language as WebsiteIcon,
  Forum as ForumIcon,
} from '@mui/icons-material';
import { LinksProps } from './interface';
import { ModernLinksCard } from './styled';

export default function Links(props: LinksProps) {
  const { data } = props;

  return (
    <ModernLinksCard>
      <Typography
        variant='h6'
        sx={{
          mb: 3,
          fontWeight: 700,
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
          gap: 1.5,
          zIndex: 1,
          position: 'relative',
        }}
      >
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
            clickable
            sx={{
              borderRadius: 3,
              background:
                'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'text.primary',
              fontWeight: 600,
              px: 2,
              py: 0.5,
              height: 40,
              transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                background:
                  'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.12) 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            }}
          />
        )}

        {data.links?.blockchain_site?.slice(0, 3).map(
          (blockchain) =>
            blockchain && (
              <Chip
                key={blockchain}
                icon={<WebsiteIcon sx={{ fontSize: 18 }} />}
                label={new URL(blockchain).hostname.replace('www.', '')}
                component='a'
                href={blockchain}
                clickable
                sx={{
                  borderRadius: 3,
                  background:
                    'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'text.primary',
                  fontWeight: 600,
                  px: 2,
                  py: 0.5,
                  height: 40,
                  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background:
                      'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.12) 100%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                  },
                  '&:active': {
                    transform: 'translateY(0)',
                  },
                }}
              />
            )
        )}

        {data.links?.official_forum_url?.[0] && (
          <Chip
            icon={<ForumIcon sx={{ fontSize: 18 }} />}
            label='Forum'
            component='a'
            href={data.links.official_forum_url[0]}
            clickable
            sx={{
              borderRadius: 3,
              background:
                'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'text.primary',
              fontWeight: 600,
              px: 2,
              py: 0.5,
              height: 40,
              transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                background:
                  'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.12) 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            }}
          />
        )}

        {data.links?.subreddit_url && (
          <Chip
            icon={<RedditIcon sx={{ fontSize: 18 }} />}
            label='Reddit'
            component='a'
            href={data.links.subreddit_url}
            clickable
            sx={{
              borderRadius: 3,
              background:
                'linear-gradient(135deg, rgba(255, 87, 34, 0.2) 0%, rgba(255, 87, 34, 0.1) 100%)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255, 87, 34, 0.3)',
              color: '#ff5722',
              fontWeight: 600,
              px: 2,
              py: 0.5,
              height: 40,
              transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                background:
                  'linear-gradient(135deg, rgba(255, 87, 34, 0.3) 0%, rgba(255, 87, 34, 0.15) 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 2px 5px rgba(255, 87, 34, 0.4)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            }}
          />
        )}

        {data.links?.twitter_screen_name && (
          <Chip
            icon={<TwitterIcon sx={{ fontSize: 18 }} />}
            label='Twitter'
            component='a'
            href={`https://twitter.com/${data.links.twitter_screen_name}/`}
            clickable
            sx={{
              borderRadius: 3,
              background:
                'linear-gradient(135deg, rgba(29, 161, 242, 0.2) 0%, rgba(29, 161, 242, 0.1) 100%)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(29, 161, 242, 0.3)',
              color: '#1da1f2',
              fontWeight: 600,
              px: 2,
              py: 0.5,
              height: 40,
              transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                background:
                  'linear-gradient(135deg, rgba(29, 161, 242, 0.3) 0%, rgba(29, 161, 242, 0.15) 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 2px 5px rgba(29, 161, 242, 0.4)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            }}
          />
        )}

        {data.links?.facebook_username && (
          <Chip
            icon={<FacebookIcon sx={{ fontSize: 18 }} />}
            label='Facebook'
            component='a'
            href={`https://www.facebook.com/${data.links.facebook_username}/`}
            clickable
            sx={{
              borderRadius: 3,
              background:
                'linear-gradient(135deg, rgba(66, 103, 178, 0.2) 0%, rgba(66, 103, 178, 0.1) 100%)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(66, 103, 178, 0.3)',
              color: '#7593ceff',
              fontWeight: 600,
              px: 2,
              py: 0.5,
              height: 40,
              transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                background:
                  'linear-gradient(135deg, rgba(66, 103, 178, 0.3) 0%, rgba(66, 103, 178, 0.15) 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 2px 5px rgba(66, 103, 178, 0.4)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            }}
          />
        )}

        {data.links?.repos_url?.github?.[0] && (
          <Chip
            icon={<GitHubIcon sx={{ fontSize: 18 }} />}
            label='GitHub'
            component='a'
            href={data.links.repos_url.github[0]}
            clickable
            sx={{
              borderRadius: 3,
              background:
                'linear-gradient(135deg, rgba(88, 96, 105, 0.2) 0%, rgba(88, 96, 105, 0.1) 100%)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(88, 96, 105, 0.3)',
              color: '#838b94ff',
              fontWeight: 600,
              px: 2,
              py: 0.5,
              height: 40,
              transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                background:
                  'linear-gradient(135deg, rgba(88, 96, 105, 0.3) 0%, rgba(88, 96, 105, 0.15) 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 2px 5px rgba(88, 96, 105, 0.4)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            }}
          />
        )}
      </Box>
    </ModernLinksCard>
  );
}
