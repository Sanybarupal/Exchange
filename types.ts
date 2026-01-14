
export interface Coin {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume: string;
  marketCap: string;
}

export interface Order {
  id: string;
  pair: string;
  type: 'BUY' | 'SELL';
  price: number;
  amount: number;
  total: number;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  time: string;
}

export interface UserWallet {
  asset: string;
  balance: number;
  locked: number;
  valueUsd: number;
}

export enum KYCStep {
  INFO = 'INFO',
  DOCUMENT = 'DOCUMENT',
  STATUS = 'STATUS'
}

export interface TradeHistory {
  time: string;
  price: number;
  amount: number;
  side: 'buy' | 'sell';
}
