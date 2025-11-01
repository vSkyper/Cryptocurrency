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
import { CARD } from 'styles/styles';

const SECTION_TITLE_CLASSES =
  'text-center text-[0.7rem] uppercase tracking-widest font-bold ' +
  'text-white/50 mb-3.5 select-none';

const PRIMARY_CHIP_CLASSES =
  'bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-blue)_20%,transparent)] to-[color-mix(in_srgb,var(--brand-blue)_10%,transparent)] ' +
  'border border-[color-mix(in_srgb,var(--brand-blue)_35%,transparent)] text-[var(--brand-blue-light)] ' +
  'hover:from-[color-mix(in_srgb,var(--brand-blue)_30%,transparent)] hover:to-[color-mix(in_srgb,var(--brand-blue)_18%,transparent)] ' +
  'hover:border-[color-mix(in_srgb,var(--brand-blue)_55%,transparent)] hover:shadow-[0_4px_16px_color-mix(in_srgb,var(--brand-blue)_20%,transparent)]';

const BLOCKCHAIN_CHIP_CLASSES =
  'bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-blue-light)_15%,transparent)] to-[color-mix(in_srgb,var(--brand-blue-light)_8%,transparent)] ' +
  'border border-[color-mix(in_srgb,var(--brand-blue-light)_28%,transparent)] text-[var(--brand-blue-light)] text-xs ' +
  'hover:from-[color-mix(in_srgb,var(--brand-blue-light)_24%,transparent)] hover:to-[color-mix(in_srgb,var(--brand-blue-light)_14%,transparent)] ' +
  'hover:border-[color-mix(in_srgb,var(--brand-blue-light)_48%,transparent)] hover:shadow-[0_4px_12px_color-mix(in_srgb,var(--brand-blue-light)_18%,transparent)]';

const ICON_SIZE = { fontSize: 18 };

const SOCIAL_LINKS = {
  reddit: {
    className:
      'bg-gradient-to-br from-[rgba(255,69,0,0.15)] to-[rgba(255,69,0,0.08)] ' +
      'border border-[rgba(255,69,0,0.4)] text-[#FF4500] ' +
      'hover:from-[rgba(255,69,0,0.25)] hover:to-[rgba(255,69,0,0.15)] ' +
      'hover:border-[rgba(255,69,0,0.6)]',
    label: 'Reddit',
  },
  twitter: {
    className:
      'bg-gradient-to-br from-[rgba(29,161,242,0.15)] to-[rgba(29,161,242,0.08)] ' +
      'border border-[rgba(29,161,242,0.4)] text-[#1DA1F2] ' +
      'hover:from-[rgba(29,161,242,0.25)] hover:to-[rgba(29,161,242,0.15)] ' +
      'hover:border-[rgba(29,161,242,0.6)]',
    label: 'Twitter',
    getUrl: (username: string) => `https://twitter.com/${username}/`,
  },
  facebook: {
    className:
      'bg-gradient-to-br from-[rgba(24,119,242,0.15)] to-[rgba(24,119,242,0.08)] ' +
      'border border-[rgba(24,119,242,0.4)] text-[#1877F2] ' +
      'hover:from-[rgba(24,119,242,0.25)] hover:to-[rgba(24,119,242,0.15)] ' +
      'hover:border-[rgba(24,119,242,0.6)]',
    label: 'Facebook',
    getUrl: (username: string) => `https://www.facebook.com/${username}/`,
  },
  github: {
    className:
      'bg-gradient-to-br from-[rgba(139,148,158,0.15)] to-[rgba(139,148,158,0.08)] ' +
      'border border-[rgba(139,148,158,0.4)] text-[#8B949E] ' +
      'hover:from-[rgba(139,148,158,0.25)] hover:to-[rgba(139,148,158,0.15)] ' +
      'hover:border-[rgba(139,148,158,0.6)]',
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
    <div className={CARD.base}>
      {/* Header */}
      <div className='mb-6 text-center'>
        <div className='font-bold text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] mb-2'>
          Official Links & Community
        </div>
        <div className='mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-blue-light)] to-[var(--brand-blue)] opacity-60' />
      </div>

      {/* Primary Links Section */}
      <div className='flex flex-wrap gap-3 justify-center mb-6'>
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
            className={PRIMARY_CHIP_CLASSES}
          >
            Official Website
          </ChipLink>
        )}

        {links?.official_forum_url?.[0] && (
          <ChipLink
            href={links.official_forum_url[0]}
            left={
              <ForumIcon sx={ICON_SIZE} className='text-[var(--brand-blue)]' />
            }
            className={PRIMARY_CHIP_CLASSES}
          >
            Official Forum
          </ChipLink>
        )}
      </div>

      {/* Blockchain Explorer Links */}
      {hasBlockchainSites && (
        <div className='mb-6'>
          <div className={SECTION_TITLE_CLASSES}>Blockchain Explorers</div>
          <div className='flex flex-wrap gap-2.5 justify-center'>
            {links?.blockchain_site?.slice(0, 3).map(
              (blockchain) =>
                blockchain && (
                  <ChipLink
                    key={blockchain}
                    href={blockchain}
                    left={
                      <WebsiteIcon
                        sx={ICON_SIZE}
                        className='text-[var(--brand-blue-light)]'
                      />
                    }
                    className={BLOCKCHAIN_CHIP_CLASSES}
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
        <div className={SECTION_TITLE_CLASSES}>Social Media</div>
        <div className='flex flex-wrap gap-2.5 justify-center'>
          {links?.subreddit_url && (
            <ChipLink
              href={links.subreddit_url}
              left={<RedditIcon sx={ICON_SIZE} />}
              className={SOCIAL_LINKS.reddit.className}
            >
              {SOCIAL_LINKS.reddit.label}
            </ChipLink>
          )}

          {links?.twitter_screen_name && (
            <ChipLink
              href={SOCIAL_LINKS.twitter.getUrl(links.twitter_screen_name)}
              left={<TwitterIcon sx={ICON_SIZE} />}
              className={SOCIAL_LINKS.twitter.className}
            >
              {SOCIAL_LINKS.twitter.label}
            </ChipLink>
          )}

          {links?.facebook_username && (
            <ChipLink
              href={SOCIAL_LINKS.facebook.getUrl(links.facebook_username)}
              left={<FacebookIcon sx={ICON_SIZE} />}
              className={SOCIAL_LINKS.facebook.className}
            >
              {SOCIAL_LINKS.facebook.label}
            </ChipLink>
          )}

          {links?.repos_url?.github?.[0] && (
            <ChipLink
              href={links.repos_url.github[0]}
              left={<GitHubIcon sx={ICON_SIZE} />}
              className={SOCIAL_LINKS.github.className}
            >
              {SOCIAL_LINKS.github.label}
            </ChipLink>
          )}
        </div>
      </div>
    </div>
  );
}
