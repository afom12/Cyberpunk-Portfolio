// src/components/CryptoTicker/CryptoTicker.js
import React, { useState, useEffect } from 'react';
import './CryptoTicker.css';

const CryptoTicker = () => {
  const [prices, setPrices] = useState([
    { symbol: 'BTC', price: '45,231.50', change: '+2.34%', trend: 'up' },
    { symbol: 'ETH', price: '3,245.67', change: '+1.23%', trend: 'up' },
    { symbol: 'SOL', price: '102.45', change: '-0.56%', trend: 'down' },
    { symbol: 'DOT', price: '7.89', change: '+5.67%', trend: 'up' },
    { symbol: 'ADA', price: '0.52', change: '-1.23%', trend: 'down' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => prev.map(coin => ({
        ...coin,
        price: (parseFloat(coin.price.replace(',', '')) * (1 + (Math.random() - 0.5) * 0.01)).toFixed(2),
        change: `${(Math.random() - 0.5) * 3 > 0 ? '+' : ''}${(Math.random() * 3).toFixed(2)}%`,
        trend: Math.random() > 0.5 ? 'up' : 'down'
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="crypto-ticker">
      <div className="ticker-header">
        <span className="ticker-title">MARKET WATCH</span>
        <div className="ticker-indicator"></div>
      </div>
      
      <div className="ticker-content">
        {prices.map((coin, index) => (
          <div key={coin.symbol} className="ticker-item" style={{animationDelay: `${index * 0.2}s`}}>
            <span className="coin-symbol">{coin.symbol}</span>
            <span className={`coin-price ${coin.trend}`}>${coin.price}</span>
            <span className={`coin-change ${coin.trend}`}>{coin.change}</span>
          </div>
        ))}
      </div>
      
      <div className="ticker-glow"></div>
    </div>
  );
};

export default CryptoTicker;