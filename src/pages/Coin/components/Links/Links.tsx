import {
  Reddit as RedditIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  Language as WebsiteIcon,
  Forum as ForumIcon,
} from '@mui/icons-material';
import { LinksProps } from './interface';
import { ChipLink } from './components';
import { CARD, COIN } from 'styles/styles';

const SOCIAL_LINKS = {
  reddit: {
    label: 'Reddit',
  },
  twitter: {
    label: 'Twitter',
    getUrl: (username: string) => `https://twitter.com/${username}/`,
  },
  facebook: {
    label: 'Facebook',
    getUrl: (username: string) => `https://www.facebook.com/${username}/`,
  },
  github: {
    label: 'GitHub',
  },
};

export default function Links({ data }: LinksProps) {
  const { links, image } = data;

  const hasBlockchainSites =
    links?.blockchain_site && links.blockchain_site.filter(Boolean).length > 0;

  const extractHostname = (url: string) =>
    new URL(url).hostname.replace('www.', '');

  return (
    <div className={CARD.tertiary}>
      {/* Header */}
      <div className={COIN.links.header}>
        <div className={COIN.links.headerLine}></div>
        <h2 className={COIN.links.headerTitle}>Official Links</h2>
        <div className={COIN.links.headerLine}></div>
      </div>

      {/* Primary Links Section */}
      <div className={COIN.links.primaryLinks}>
        {links?.homepage?.[0] && (
          <ChipLink
            href={links.homepage[0]}
            left={
              <img
                src={image?.large}
                alt='logo'
                className='w-5 h-5 rounded-full object-cover border border-white/30 shadow-sm'
              />
            }
            className={COIN.links.chip.primary}
          >
            Official Website
          </ChipLink>
        )}

        {links?.official_forum_url?.[0] && (
          <ChipLink
            href={links.official_forum_url[0]}
            left={
              <ForumIcon
                sx={COIN.links.iconSize}
                className='text-[var(--brand-blue)]'
              />
            }
            className={COIN.links.chip.primary}
          >
            Official Forum
          </ChipLink>
        )}
      </div>

      {/* Blockchain Explorer Links */}
      {hasBlockchainSites && (
        <div className={COIN.links.blockchainLinks}>
          <div className={COIN.links.sectionTitle}>Blockchain Explorers</div>
          <div className={COIN.links.chipGroup}>
            {links?.blockchain_site?.slice(0, 3).map(
              (blockchain) =>
                blockchain && (
                  <ChipLink
                    key={blockchain}
                    href={blockchain}
                    left={
                      <WebsiteIcon
                        sx={COIN.links.iconSize}
                        className='text-[var(--brand-blue-light)]'
                      />
                    }
                    className={COIN.links.chip.blockchain}
                  >
                    {extractHostname(blockchain)}
                  </ChipLink>
                )
            )}
          </div>
        </div>
      )}

      {/* Social Media Links */}
      <div>
        <div className={COIN.links.sectionTitle}>Social Media</div>
        <div className={COIN.links.chipGroup}>
          {links?.subreddit_url && (
            <ChipLink
              href={links.subreddit_url}
              left={<RedditIcon sx={COIN.links.iconSize} />}
              className={COIN.links.chip.social.reddit}
            >
              {SOCIAL_LINKS.reddit.label}
            </ChipLink>
          )}

          {links?.twitter_screen_name && (
            <ChipLink
              href={SOCIAL_LINKS.twitter.getUrl(links.twitter_screen_name)}
              left={<TwitterIcon sx={COIN.links.iconSize} />}
              className={COIN.links.chip.social.twitter}
            >
              {SOCIAL_LINKS.twitter.label}
            </ChipLink>
          )}

          {links?.facebook_username && (
            <ChipLink
              href={SOCIAL_LINKS.facebook.getUrl(links.facebook_username)}
              left={<FacebookIcon sx={COIN.links.iconSize} />}
              className={COIN.links.chip.social.facebook}
            >
              {SOCIAL_LINKS.facebook.label}
            </ChipLink>
          )}

          {links?.repos_url?.github?.[0] && (
            <ChipLink
              href={links.repos_url.github[0]}
              left={<GitHubIcon sx={COIN.links.iconSize} />}
              className={COIN.links.chip.social.github}
            >
              {SOCIAL_LINKS.github.label}
            </ChipLink>
          )}
        </div>
      </div>
    </div>
  );
}
