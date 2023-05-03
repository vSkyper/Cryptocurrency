export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  asset_platform_id: any;
  platforms: Platforms;
  detail_platforms: DetailPlatforms;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  public_notice: any;
  additional_notices: any[];
  description: Description;
  links: Links;
  image: Image;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: IMarketData;
  public_interest_stats: PublicInterestStats;
  status_updates: any[];
  last_updated: string;
}

interface Platforms {
  [key: string]: string;
}

interface DetailPlatforms {
  [key: string]: GeneratedType;
}

interface GeneratedType {
  decimal_place: any;
  contract_address: string;
}

interface Description {
  en: string;
}

interface Links {
  homepage: string[];
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier: any;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: ReposUrl;
}

interface ReposUrl {
  github: string[];
  bitbucket: any[];
}

interface Image {
  thumb: string;
  small: string;
  large: string;
}

export interface IMarketData {
  current_price: CurrentPrice;
  total_value_locked: any;
  mcap_to_tvl_ratio: any;
  fdv_to_tvl_ratio: any;
  roi: any;
  ath: Ath;
  ath_change_percentage: AthChangePercentage;
  ath_date: AthDate;
  atl: Atl;
  atl_change_percentage: AtlChangePercentage;
  atl_date: AtlDate;
  market_cap: MarketCap;
  market_cap_rank?: number;
  fully_diluted_valuation: FullyDilutedValuation;
  total_volume: TotalVolume;
  high_24h: High24h;
  low_24h: Low24h;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: PriceChange24hInCurrency;
  price_change_percentage_1h_in_currency: PriceChangePercentage1hInCurrency;
  price_change_percentage_24h_in_currency: PriceChangePercentage24hInCurrency;
  price_change_percentage_7d_in_currency: PriceChangePercentage7dInCurrency;
  price_change_percentage_14d_in_currency: PriceChangePercentage14dInCurrency;
  price_change_percentage_30d_in_currency: PriceChangePercentage30dInCurrency;
  price_change_percentage_60d_in_currency: PriceChangePercentage60dInCurrency;
  price_change_percentage_200d_in_currency: PriceChangePercentage200dInCurrency;
  price_change_percentage_1y_in_currency: PriceChangePercentage1yInCurrency;
  market_cap_change_24h_in_currency: MarketCapChange24hInCurrency;
  market_cap_change_percentage_24h_in_currency: MarketCapChangePercentage24hInCurrency;
  total_supply?: number;
  max_supply: number;
  circulating_supply: number;
  last_updated: string;
}

interface CurrentPrice {
  [key: string]: number;
}

interface Ath {
  [key: string]: number;
}

interface AthChangePercentage {
  [key: string]: number;
}

interface AthDate {
  [key: string]: string;
}

interface Atl {
  [key: string]: number;
}

interface AtlChangePercentage {
  [key: string]: number;
}

interface AtlDate {
  [key: string]: string;
}

interface MarketCap {
  [key: string]: number;
}

interface FullyDilutedValuation {
  [key: string]: number;
}

interface TotalVolume {
  [key: string]: number;
}

interface High24h {
  [key: string]: number;
}

interface Low24h {
  [key: string]: number;
}

interface PriceChange24hInCurrency {
  [key: string]: number;
}

interface PriceChangePercentage1hInCurrency {
  [key: string]: number;
}

interface PriceChangePercentage24hInCurrency {
  [key: string]: number;
}

interface PriceChangePercentage7dInCurrency {
  [key: string]: number;
}

interface PriceChangePercentage14dInCurrency {
  [key: string]: number;
}

interface PriceChangePercentage30dInCurrency {
  [key: string]: number;
}

interface PriceChangePercentage60dInCurrency {
  [key: string]: number;
}

interface PriceChangePercentage200dInCurrency {
  [key: string]: number;
}

interface PriceChangePercentage1yInCurrency {
  [key: string]: number;
}

interface MarketCapChange24hInCurrency {
  [key: string]: number;
}

interface MarketCapChangePercentage24hInCurrency {
  [key: string]: number;
}

interface PublicInterestStats {
  alexa_rank: number;
  bing_matches: any;
}
