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
    <div className='mt-6 sm:mt-10'>
      {/* Header */}
      <div className='flex items-center gap-4 mb-4 sm:mb-6 opacity-50'>
        <div className='h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent'></div>
        <h2 className='text-xs font-bold uppercase tracking-[0.2em] text-white'>
          Official Links
        </h2>
        <div className='h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent'></div>
      </div>

      {/* Primary Links Section */}
      <div className='flex flex-wrap gap-2 sm:gap-3 mb-4'>
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
          >
            Official Website
          </ChipLink>
        )}

        {links?.official_forum_url?.[0] && (
          <ChipLink
            href={links.official_forum_url[0]}
            left={
              <ForumIcon
                sx={{ fontSize: 16 }}
                className='text-(--brand-blue)'
              />
            }
          >
            Official Forum
          </ChipLink>
        )}
      </div>

      {/* Blockchain Explorer Links */}
      {hasBlockchainSites && (
        <div className='mb-4'>
          <div className='text-center text-[0.65rem] sm:text-xs md:text-xs uppercase tracking-[0.2em] font-bold text-(--brand-blue) mb-3 sm:mb-4 md:mb-5 select-none'>
            Blockchain Explorers
          </div>
          <div className='flex flex-wrap gap-2'>
            {links?.blockchain_site?.slice(0, 3).map(
              (blockchain) =>
                blockchain && (
                  <ChipLink
                    key={blockchain}
                    href={blockchain}
                    left={
                      <WebsiteIcon
                        sx={{ fontSize: 16 }}
                        className='text-(--brand-blue-light)'
                      />
                    }
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
        <div className='text-center text-[0.65rem] sm:text-xs md:text-xs uppercase tracking-[0.2em] font-bold text-(--brand-blue) mb-3 sm:mb-4 md:mb-5 select-none'>
          Social Media
        </div>
        <div className='flex flex-wrap gap-2'>
          {links?.subreddit_url && (
            <ChipLink
              href={links.subreddit_url}
              left={<RedditIcon sx={{ fontSize: 16 }} />}
              className='hover:border-[#FF4500]/50 hover:shadow-[0_0_20px_rgba(255,69,0,0.2)]'
            >
              {SOCIAL_LINKS.reddit.label}
            </ChipLink>
          )}

          {links?.twitter_screen_name && (
            <ChipLink
              href={SOCIAL_LINKS.twitter.getUrl(links.twitter_screen_name)}
              left={<TwitterIcon sx={{ fontSize: 16 }} />}
              className='hover:border-[#1DA1F2]/50 hover:shadow-[0_0_20px_rgba(29,161,242,0.2)]'
            >
              {SOCIAL_LINKS.twitter.label}
            </ChipLink>
          )}

          {links?.facebook_username && (
            <ChipLink
              href={SOCIAL_LINKS.facebook.getUrl(links.facebook_username)}
              left={<FacebookIcon sx={{ fontSize: 16 }} />}
              className='hover:border-[#1877F2]/50 hover:shadow-[0_0_20px_rgba(24,119,242,0.2)]'
            >
              {SOCIAL_LINKS.facebook.label}
            </ChipLink>
          )}

          {links?.repos_url?.github?.[0] && (
            <ChipLink
              href={links.repos_url.github[0]}
              left={<GitHubIcon sx={{ fontSize: 16 }} />}
              className='hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]'
            >
              {SOCIAL_LINKS.github.label}
            </ChipLink>
          )}
        </div>
      </div>
    </div>
  );
}
