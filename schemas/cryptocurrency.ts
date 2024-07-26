import { z } from "zod";

// {
//   "data": [],
//   "timestamp": 1721327721616
//   }

// {
//     "data": [
//     {
//     "id": "bitcoin",
//     "rank": "1",
//     "symbol": "BTC",
//     "name": "Bitcoin",
//     "supply": "19719443.0000000000000000",
//     "maxSupply": "21000000.0000000000000000",
//     "marketCapUsd": "1144590697166.8152303053843229",
//     "volumeUsd24Hr": "16798853408.3166503575195498",
//     "priceUsd": "58043.7640742091564303",
//     "changePercent24Hr": "-3.5451696904629240",
//     "vwap24Hr": "58563.0673025260579434",
//     "explorer": "https://blockchain.info/"
//     } ]
// }

export const cryptocurrencySchema = z.object({
  id: z.string(),
  rank: z.string(),
  symbol: z.string(),
  name: z.string(),
  supply: z.string(),
  maxSupply: z.string().nullable(),
  marketCapUsd: z.string(),
  volumeUsd24Hr: z.string(),
  priceUsd: z.string(),
  changePercent24Hr: z.string(),
  vwap24Hr: z.string(),
  explorer: z.string().nullable(),
});

export const pathCryptocurrencySchema = z.array(cryptocurrencySchema);

export const cryptocurrencyApiSchema = z.object({
  data: z.array(cryptocurrencySchema),
  timestamp: z.number(),
});

export type Cryptocurrency = z.infer<typeof cryptocurrencySchema>;
