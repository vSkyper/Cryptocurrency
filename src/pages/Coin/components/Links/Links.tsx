import { Avatar, Box } from '@mui/material';
import {
  Reddit as RedditIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  Language as WebsiteIcon,
  Forum as ForumIcon,
} from '@mui/icons-material';
import { LinksProps } from './interface';
import {
  ModernLinksCard,
  HeaderBox,
  TitleTypography,
  SectionTitle,
  LinksContainer,
  PrimaryLinkChip,
  ForumChip,
  ExplorerChip,
  RedditChip,
  TwitterChip,
  FacebookChip,
  GitHubChip,
} from './styled';

export default function Links({ data }: LinksProps) {
  const hasBlockchainSites =
    data.links?.blockchain_site &&
    data.links.blockchain_site.filter(Boolean).length > 0;

  return (
    <ModernLinksCard>
      <HeaderBox>
        <TitleTypography variant='h6'>
          Official Links & Community
        </TitleTypography>
      </HeaderBox>

      {/* Primary Links Section */}
      <LinksContainer sx={{ gap: 1.5 }}>
        {data.links?.homepage?.[0] && (
          <PrimaryLinkChip
            avatar={
              <Avatar
                alt='logo'
                src={data.image?.large}
                sx={{
                  width: 22,
                  height: 22,
                  border:
                    '1px solid color-mix(in srgb, var(--brand-blue) 30%, transparent)',
                }}
              />
            }
            label='Official Website'
            component='a'
            href={data.links.homepage[0]}
            clickable
          />
        )}

        {data.links?.official_forum_url?.[0] && (
          <ForumChip
            icon={
              <ForumIcon sx={{ fontSize: 18, color: 'var(--brand-blue)' }} />
            }
            label='Official Forum'
            component='a'
            href={data.links.official_forum_url[0]}
            clickable
          />
        )}
      </LinksContainer>

      {/* Blockchain Explorer Links */}
      {hasBlockchainSites && (
        <Box sx={{ mt: 3 }}>
          <SectionTitle variant='subtitle2'>Blockchain Explorers</SectionTitle>
          <LinksContainer>
            {data.links?.blockchain_site?.slice(0, 3).map(
              (blockchain) =>
                blockchain && (
                  <ExplorerChip
                    key={blockchain}
                    icon={
                      <WebsiteIcon
                        sx={{
                          fontSize: 16,
                          color: 'var(--brand-blue-light)',
                        }}
                      />
                    }
                    label={new URL(blockchain).hostname.replace('www.', '')}
                    component='a'
                    href={blockchain}
                    clickable
                  />
                )
            )}
          </LinksContainer>
        </Box>
      )}

      {/* Social Media Links */}
      <Box sx={{ mt: 3 }}>
        <SectionTitle variant='subtitle2'>Social Media</SectionTitle>
        <LinksContainer>
          {data.links?.subreddit_url && (
            <RedditChip
              icon={<RedditIcon sx={{ fontSize: 16 }} />}
              label='Reddit'
              component='a'
              href={data.links.subreddit_url}
              clickable
            />
          )}

          {data.links?.twitter_screen_name && (
            <TwitterChip
              icon={<TwitterIcon sx={{ fontSize: 16 }} />}
              label='Twitter'
              component='a'
              href={`https://twitter.com/${data.links.twitter_screen_name}/`}
              clickable
            />
          )}

          {data.links?.facebook_username && (
            <FacebookChip
              icon={<FacebookIcon sx={{ fontSize: 16 }} />}
              label='Facebook'
              component='a'
              href={`https://www.facebook.com/${data.links.facebook_username}/`}
              clickable
            />
          )}

          {data.links?.repos_url?.github?.[0] && (
            <GitHubChip
              icon={<GitHubIcon sx={{ fontSize: 16 }} />}
              label='GitHub'
              component='a'
              href={data.links.repos_url.github[0]}
              clickable
            />
          )}
        </LinksContainer>
      </Box>
    </ModernLinksCard>
  );
}
