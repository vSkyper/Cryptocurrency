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

const SECTION_TITLE_CLASSES =
  'text-center text-[0.75rem] uppercase tracking-wide font-semibold ' +
  'text-[color-mix(in_srgb,var(--brand-blue)_80%,transparent)] mb-3';

const PRIMARY_CHIP_CLASSES =
  'bg-[var(--chip-bg)] border border-[var(--chip-border)] text-[var(--brand-blue)]';

const BLOCKCHAIN_CHIP_CLASSES =
  'bg-[var(--chip-bg)] border border-[var(--chip-border)] text-[var(--brand-blue-light)] text-xs';

const ICON_SIZE = { fontSize: 16 };

const SOCIAL_LINKS = {
  reddit: {
    className:
      'text-sm bg-[linear-gradient(135deg,rgba(255,69,0,0.2),rgba(255,69,0,0.1))] border border-[rgba(255,69,0,0.5)] text-[#CC3700]',
    label: 'Reddit',
  },
  twitter: {
    className:
      'text-sm bg-[linear-gradient(135deg,rgba(29,161,242,0.2),rgba(29,161,242,0.1))] border border-[rgba(29,161,242,0.5)] text-[#1B8CD3]',
    label: 'Twitter',
    getUrl: (username: string) => `https://twitter.com/${username}/`,
  },
  facebook: {
    className:
      'text-sm bg-[linear-gradient(135deg,rgba(24,119,242,0.2),rgba(24,119,242,0.1))] border border-[rgba(24,119,242,0.5)] text-[#1565C0]',
    label: 'Facebook',
    getUrl: (username: string) => `https://www.facebook.com/${username}/`,
  },
  github: {
    className:
      'text-sm bg-[linear-gradient(135deg,rgba(139,148,158,0.2),rgba(139,148,158,0.1))] border border-[rgba(139,148,158,0.5)] text-[#7D8590]',
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
    <div className='p-4 rounded-lg bg-[var(--bg-tertiary)]'>
      {/* Header */}
      <div className='mb-4 pb-4 border-b border-[color-mix(in_srgb,var(--brand-blue)20%,transparent)]'>
        <div className='text-center font-bold text-lg sm:text-xl bg-clip-text text-transparent bg-[linear-gradient(135deg,var(--brand-blue)_0%,var(--brand-blue-light)_70%)]'>
          Official Links & Community
        </div>
        <div className='mx-auto mt-2 h-1 w-14 rounded-sm bg-[linear-gradient(90deg,var(--brand-blue),var(--brand-blue-light))]' />
      </div>

      {/* Primary Links Section */}
      <div className='flex flex-wrap gap-2 justify-center'>
        {links?.homepage?.[0] && (
          <ChipLink
            href={links.homepage[0]}
            left={
              <img
                src={image?.large}
                alt='logo'
                className='w-5 h-5 rounded-full object-cover border'
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
        <div className='mt-3'>
          <div className={SECTION_TITLE_CLASSES}>Blockchain Explorers</div>
          <div className='flex flex-wrap gap-2 justify-center'>
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
      <div className='mt-3'>
        <div className={SECTION_TITLE_CLASSES}>Social Media</div>
        <div className='flex flex-wrap gap-2 justify-center'>
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
