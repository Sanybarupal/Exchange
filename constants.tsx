
import React from 'react';
import { Coin, UserWallet, TradeHistory } from './types';

export const MOCK_COINS: Coin[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: 68432.50, change24h: 2.45, volume: '32.1B', marketCap: '1.3T' },
  { symbol: 'ETH', name: 'Ethereum', price: 3451.20, change24h: -1.2, volume: '15.4B', marketCap: '412B' },
  { symbol: 'BNB', name: 'BinEx Coin', price: 589.40, change24h: 5.12, volume: '1.2B', marketCap: '92B' },
  { symbol: 'SOL', name: 'Solana', price: 145.22, change24h: 8.33, volume: '4.5B', marketCap: '64B' },
  { symbol: 'ADA', name: 'Cardano', price: 0.45, change24h: -0.5, volume: '450M', marketCap: '16B' },
  { symbol: 'DOT', name: 'Polkadot', price: 7.21, change24h: 1.1, volume: '210M', marketCap: '9B' },
];

export const MOCK_WALLET: UserWallet[] = [
  { asset: 'BTC', balance: 1.25, locked: 0.05, valueUsd: 85540 },
  { asset: 'ETH', balance: 15.4, locked: 2.1, valueUsd: 53148 },
  { asset: 'USDT', balance: 12500, locked: 0, valueUsd: 12500 },
  { asset: 'BNB', balance: 45.2, locked: 0, valueUsd: 26640 },
];

export const MOCK_TRADE_HISTORY: TradeHistory[] = Array.from({ length: 20 }, (_, i) => ({
  time: new Date(Date.now() - i * 5000).toLocaleTimeString(),
  price: 68430 + Math.random() * 10,
  amount: Math.random() * 0.5,
  side: Math.random() > 0.5 ? 'buy' : 'sell'
}));

export const ICONS = {
  Wallet: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
  ),
  TrendingUp: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
  ),
  User: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  Shield: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
  ),
  Clock: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  Download: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
  ),
  Upload: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
  ),
};
