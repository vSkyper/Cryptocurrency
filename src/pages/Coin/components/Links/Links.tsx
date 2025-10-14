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

export default function Links({ data }: LinksProps) {
  const hasBlockchainSites =
    data.links?.blockchain_site &&
    data.links.blockchain_site.filter(Boolean).length > 0;

  return (
    <div className='p-4 rounded-lg bg-[var(--bg-tertiary)]'>
      <div className='mb-4 pb-4 border-b border-[color-mix(in_srgb,var(--brand-blue)20%,transparent)]'>
        <div className='text-center font-bold text-lg sm:text-xl bg-clip-text text-transparent bg-[linear-gradient(135deg,var(--brand-blue)_0%,var(--brand-blue-light)_70%)]'>
          Official Links & Community
        </div>
        {/* small centered underline bar (replaces MUI ::after) */}
        <div className='mx-auto mt-2 h-1 w-14 rounded-sm bg-[linear-gradient(90deg,var(--brand-blue),var(--brand-blue-light))]' />
      </div>

      {/* Primary Links Section */}
      <div className='flex flex-wrap gap-2 justify-center'>
        {data.links?.homepage?.[0] && (
          <ChipLink
            href={data.links.homepage[0]}
            left={
              <img
                src={data.image?.large}
                alt='logo'
                className='w-5 h-5 rounded-full object-cover border'
              />
            }
            className='bg-[var(--chip-bg)] border border-[var(--chip-border)] text-[var(--brand-blue)]'
          >
            Official Website
          </ChipLink>
        )}

        {data.links?.official_forum_url?.[0] && (
          <ChipLink
            href={data.links.official_forum_url[0]}
            left={
              <ForumIcon
                sx={{ fontSize: 16 }}
                className='text-[var(--brand-blue)]'
              />
            }
            className='bg-[var(--chip-bg)] border border-[var(--chip-border)] text-[var(--brand-blue)]'
          >
            Official Forum
          </ChipLink>
        )}
      </div>

      {/* Blockchain Explorer Links */}
      {hasBlockchainSites && (
        <div className='mt-3'>
          <div className='text-center text-[0.75rem] uppercase tracking-wide font-semibold text-[color-mix(in_srgb,var(--brand-blue)_80%,transparent)] mb-3'>
            Blockchain Explorers
          </div>
          <div className='flex flex-wrap gap-2 justify-center'>
            {data.links?.blockchain_site?.slice(0, 3).map(
              (blockchain) =>
                blockchain && (
                  <ChipLink
                    key={blockchain}
                    href={blockchain}
                    left={
                      <WebsiteIcon
                        sx={{ fontSize: 16 }}
                        className='text-[var(--brand-blue-light)]'
                      />
                    }
                    className='bg-[var(--chip-bg)] border border-[var(--chip-border)] text-[var(--brand-blue-light)] text-xs'
                  >
                    {new URL(blockchain).hostname.replace('www.', '')}
                  </ChipLink>
                )
            )}
          </div>
        </div>
      )}

      {/* Social Media Links */}
      <div className='mt-3'>
        <div className='text-center text-[0.75rem] uppercase tracking-wide font-semibold text-[color-mix(in_srgb,var(--brand-blue)_80%,transparent)] mb-3'>
          Social Media
        </div>
        <div className='flex flex-wrap gap-2 justify-center'>
          {data.links?.subreddit_url && (
            <ChipLink
              href={data.links.subreddit_url}
              left={<RedditIcon sx={{ fontSize: 16 }} />}
              className='text-sm bg-[linear-gradient(135deg,rgba(255,69,0,0.2),rgba(255,69,0,0.1))] border border-[rgba(255,69,0,0.5)] text-[#CC3700]'
            >
              Reddit
            </ChipLink>
          )}

          {data.links?.twitter_screen_name && (
            <ChipLink
              href={`https://twitter.com/${data.links.twitter_screen_name}/`}
              left={<TwitterIcon sx={{ fontSize: 16 }} />}
              className='text-sm bg-[linear-gradient(135deg,rgba(29,161,242,0.2),rgba(29,161,242,0.1))] border border-[rgba(29,161,242,0.5)] text-[#1B8CD3]'
            >
              Twitter
            </ChipLink>
          )}

          {data.links?.facebook_username && (
            <ChipLink
              href={`https://www.facebook.com/${data.links.facebook_username}/`}
              left={<FacebookIcon sx={{ fontSize: 16 }} />}
              className='text-sm bg-[linear-gradient(135deg,rgba(24,119,242,0.2),rgba(24,119,242,0.1))] border border-[rgba(24,119,242,0.5)] text-[#1565C0]'
            >
              Facebook
            </ChipLink>
          )}

          {data.links?.repos_url?.github?.[0] && (
            <ChipLink
              href={data.links.repos_url.github[0]}
              left={<GitHubIcon sx={{ fontSize: 16 }} />}
              className='text-sm bg-[linear-gradient(135deg,rgba(139,148,158,0.2),rgba(139,148,158,0.1))] border border-[rgba(139,148,158,0.5)] text-[#7D8590]'
            >
              GitHub
            </ChipLink>
          )}
        </div>
      </div>
    </div>
  );
}
