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
      <Box
        sx={{
          mb: 3,
          pb: 2,
          borderBottom: '1px solid rgba(208, 188, 255, 0.2)',
          position: 'relative',
        }}
      >
        <Typography
          variant='h6'
          sx={{
            fontWeight: 700,
            fontSize: '1.2rem',
            background: 'linear-gradient(135deg, #D0BCFF 0%, #CCC2DC 70%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textAlign: 'center',
            letterSpacing: '-0.01em',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, #D0BCFF, #CCC2DC)',
              borderRadius: '1px',
            },
          }}
        >
          Official Links & Community
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          zIndex: 1,
          position: 'relative',
        }}
      >
        {/* Primary Links Section */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
            justifyContent: 'center',
          }}
        >
          {data.links?.homepage?.[0] && (
            <StyledChip
              avatar={
                <Avatar
                  alt='logo'
                  src={data.image?.large}
                  sx={{
                    width: 22,
                    height: 22,
                    border: '1px solid rgba(208, 188, 255, 0.3)',
                  }}
                />
              }
              label='Official Website'
              component='a'
              href={data.links.homepage[0]}
              clickable
              sx={{
                background:
                  'linear-gradient(135deg, rgba(208, 188, 255, 0.2) 0%, rgba(204, 194, 220, 0.1) 100%)',
                border: '1px solid rgba(208, 188, 255, 0.4)',
                color: '#D0BCFF',
                fontWeight: 600,
                height: 36,
                px: 2,
                '&:hover': {
                  background:
                    'linear-gradient(135deg, rgba(208, 188, 255, 0.3) 0%, rgba(204, 194, 220, 0.15) 100%)',
                  border: '1px solid rgba(208, 188, 255, 0.6)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(208, 188, 255, 0.3)',
                },
              }}
            />
          )}

          {data.links?.official_forum_url?.[0] && (
            <StyledChip
              icon={<ForumIcon sx={{ fontSize: 18, color: '#D0BCFF' }} />}
              label='Official Forum'
              component='a'
              href={data.links.official_forum_url[0]}
              clickable
              sx={{
                background:
                  'linear-gradient(135deg, rgba(208, 188, 255, 0.15) 0%, rgba(204, 194, 220, 0.08) 100%)',
                border: '1px solid rgba(208, 188, 255, 0.3)',
                color: '#D0BCFF',
                fontWeight: 500,
                height: 36,
                '&:hover': {
                  background:
                    'linear-gradient(135deg, rgba(208, 188, 255, 0.25) 0%, rgba(204, 194, 220, 0.12) 100%)',
                  border: '1px solid rgba(208, 188, 255, 0.5)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(208, 188, 255, 0.2)',
                },
              }}
            />
          )}
        </Box>
      </Box>

      {/* Blockchain Explorer Links */}
      {data.links?.blockchain_site &&
        data.links.blockchain_site.filter(Boolean).length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography
              variant='subtitle2'
              sx={{
                color: 'rgba(208, 188, 255, 0.8)',
                fontWeight: 600,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                mb: 2,
                textAlign: 'center',
              }}
            >
              Blockchain Explorers
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                justifyContent: 'center',
              }}
            >
              {data.links?.blockchain_site?.slice(0, 3).map(
                (blockchain) =>
                  blockchain && (
                    <StyledChip
                      key={blockchain}
                      icon={
                        <WebsiteIcon sx={{ fontSize: 16, color: '#CCC2DC' }} />
                      }
                      label={new URL(blockchain).hostname.replace('www.', '')}
                      component='a'
                      href={blockchain}
                      clickable
                      sx={{
                        background:
                          'linear-gradient(135deg, rgba(204, 194, 220, 0.12) 0%, rgba(208, 188, 255, 0.06) 100%)',
                        border: '1px solid rgba(204, 194, 220, 0.25)',
                        color: '#CCC2DC',
                        fontSize: '0.75rem',
                        height: 32,
                        '&:hover': {
                          background:
                            'linear-gradient(135deg, rgba(204, 194, 220, 0.2) 0%, rgba(208, 188, 255, 0.1) 100%)',
                          border: '1px solid rgba(204, 194, 220, 0.4)',
                          transform: 'translateY(-1px)',
                          boxShadow: '0 4px 16px rgba(204, 194, 220, 0.2)',
                        },
                      }}
                    />
                  )
              )}
            </Box>
          </Box>
        )}

      {/* Social Media Links */}
      <Box sx={{ mt: 3 }}>
        <Typography
          variant='subtitle2'
          sx={{
            color: 'rgba(208, 188, 255, 0.8)',
            fontWeight: 600,
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            mb: 2,
            textAlign: 'center',
          }}
        >
          Social Media
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            justifyContent: 'center',
          }}
        >
          {data.links?.subreddit_url && (
            <StyledChip
              icon={
                <RedditIcon
                  sx={{ fontSize: 16, color: '#FF4500 !important' }}
                />
              }
              label='Reddit'
              component='a'
              href={data.links.subreddit_url}
              clickable
              sx={{
                background:
                  'linear-gradient(135deg, rgba(255, 69, 0, 0.2) 0%, rgba(255, 69, 0, 0.1) 100%)',
                border: '1px solid rgba(255, 69, 0, 0.3)',
                color: '#CC3700',
                fontWeight: 600,
                height: 34,
                px: 1.5,
                '& .MuiChip-icon': {
                  color: '#FF4500 !important',
                },
                '& .MuiChip-label': {
                  color: '#CC3700',
                },
                '&:hover': {
                  background:
                    'linear-gradient(135deg, rgba(255, 69, 0, 0.3) 0%, rgba(255, 69, 0, 0.15) 100%)',
                  border: '1px solid rgba(255, 69, 0, 0.5)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(255, 69, 0, 0.3)',
                },
              }}
            />
          )}

          {data.links?.twitter_screen_name && (
            <StyledChip
              icon={
                <TwitterIcon
                  sx={{ fontSize: 16, color: '#1DA1F2 !important' }}
                />
              }
              label='Twitter'
              component='a'
              href={`https://twitter.com/${data.links.twitter_screen_name}/`}
              clickable
              sx={{
                background:
                  'linear-gradient(135deg, rgba(29, 161, 242, 0.2) 0%, rgba(29, 161, 242, 0.1) 100%)',
                border: '1px solid rgba(29, 161, 242, 0.3)',
                color: '#1B8CD3',
                fontWeight: 600,
                height: 34,
                px: 1.5,
                '& .MuiChip-icon': {
                  color: '#1DA1F2 !important',
                },
                '& .MuiChip-label': {
                  color: '#1B8CD3',
                },
                '&:hover': {
                  background:
                    'linear-gradient(135deg, rgba(29, 161, 242, 0.3) 0%, rgba(29, 161, 242, 0.15) 100%)',
                  border: '1px solid rgba(29, 161, 242, 0.5)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(29, 161, 242, 0.3)',
                },
              }}
            />
          )}

          {data.links?.facebook_username && (
            <StyledChip
              icon={
                <FacebookIcon
                  sx={{ fontSize: 16, color: '#1877F2 !important' }}
                />
              }
              label='Facebook'
              component='a'
              href={`https://www.facebook.com/${data.links.facebook_username}/`}
              clickable
              sx={{
                background:
                  'linear-gradient(135deg, rgba(24, 119, 242, 0.2) 0%, rgba(24, 119, 242, 0.1) 100%)',
                border: '1px solid rgba(24, 119, 242, 0.3)',
                color: '#1565C0',
                fontWeight: 600,
                height: 34,
                px: 1.5,
                '& .MuiChip-icon': {
                  color: '#1877F2 !important',
                },
                '& .MuiChip-label': {
                  color: '#1565C0',
                },
                '&:hover': {
                  background:
                    'linear-gradient(135deg, rgba(24, 119, 242, 0.3) 0%, rgba(24, 119, 242, 0.15) 100%)',
                  border: '1px solid rgba(24, 119, 242, 0.5)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(24, 119, 242, 0.3)',
                },
              }}
            />
          )}

          {data.links?.repos_url?.github?.[0] && (
            <StyledChip
              icon={
                <GitHubIcon
                  sx={{ fontSize: 16, color: '#8B949E !important' }}
                />
              }
              label='GitHub'
              component='a'
              href={data.links.repos_url.github[0]}
              clickable
              sx={{
                background:
                  'linear-gradient(135deg, rgba(139, 148, 158, 0.2) 0%, rgba(139, 148, 158, 0.1) 100%)',
                border: '1px solid rgba(139, 148, 158, 0.3)',
                color: '#7D8590',
                fontWeight: 600,
                height: 34,
                px: 1.5,
                '& .MuiChip-icon': {
                  color: '#8B949E !important',
                },
                '& .MuiChip-label': {
                  color: '#7D8590',
                },
                '&:hover': {
                  background:
                    'linear-gradient(135deg, rgba(139, 148, 158, 0.3) 0%, rgba(139, 148, 158, 0.15) 100%)',
                  border: '1px solid rgba(139, 148, 158, 0.5)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(139, 148, 158, 0.3)',
                },
              }}
            />
          )}
        </Box>
      </Box>
    </ModernLinksCard>
  );
}
