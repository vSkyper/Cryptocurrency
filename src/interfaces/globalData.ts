export interface IGlobalData {
  data: Data;
}

interface Data {
  active_cryptocurrencies: number;
  upcoming_icos: number;
  ongoing_icos: number;
  ended_icos: number;
  markets: number;
  total_market_cap: TotalMarketCap;
  total_volume: TotalVolume;
  market_cap_percentage: MarketCapPercentage;
  market_cap_change_percentage_24h_usd: number;
  updated_at: number;
}

interface TotalMarketCap {
  [key: string]: number;
}

interface TotalVolume {
  [key: string]: number;
}

interface MarketCapPercentage {
  [key: string]: number;
}
