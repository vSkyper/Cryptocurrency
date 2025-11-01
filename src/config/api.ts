/**
 * CoinGecko API Configuration
 * Centralized API configuration for the application
 */

// API Key - should be moved to environment variable in production
export const COINGECKO_API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;

// Base URL
const BASE_URL = 'https://api.coingecko.com/api/v3';

/**
 * Helper function to build API URLs with authentication
 */
const buildUrl = (
  endpoint: string,
  params: Record<string, string | number> = {}
): string => {
  const url = new URL(`${BASE_URL}${endpoint}`);

  // Add API key
  url.searchParams.append('x_cg_demo_api_key', COINGECKO_API_KEY);

  // Add additional params
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });

  return url.toString();
};

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  // Global data
  global: () => buildUrl('/global'),

  // Coins list
  coinsList: () => buildUrl('/coins/list', { include_platform: 'false' }),

  // Coins markets
  coinsMarkets: (params?: {
    vs_currency?: string;
    order?: string;
    per_page?: number;
    page?: number;
    sparkline?: boolean;
    price_change_percentage?: string;
  }) =>
    buildUrl('/coins/markets', {
      vs_currency: params?.vs_currency || 'usd',
      order: params?.order || 'market_cap_desc',
      per_page: params?.per_page || 250,
      page: params?.page || 1,
      sparkline: params?.sparkline ? 'true' : 'false',
      price_change_percentage: params?.price_change_percentage || '',
    }),

  // Individual coin details
  coin: (id: string) =>
    buildUrl(`/coins/${id}`, {
      localization: 'false',
      tickers: 'false',
      market_data: 'true',
      community_data: 'false',
      developer_data: 'false',
      sparkline: 'false',
    }),

  // Coin market chart
  coinMarketChart: (id: string, days: string | number) =>
    buildUrl(`/coins/${id}/market_chart`, {
      vs_currency: 'usd',
      days: String(days),
    }),

  // Supported currencies
  supportedCurrencies: () => buildUrl('/simple/supported_vs_currencies'),

  // Exchange rate
  exchangeRate: (id: string, vsCurrency: string) =>
    buildUrl('/simple/price', {
      ids: id,
      vs_currencies: vsCurrency,
    }),
} as const;

export default API_ENDPOINTS;
