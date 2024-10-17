import React from 'react';
import btcIcon from '../assets/btc.png';
import ethIcon from '../assets/eth.png';
import solIcon from '../assets/sol.png';
import avaxIcon from '../assets/avax.png';
import tonIcon from '../assets/ton.png';
import zroIcon from '../assets/zro.png';
import olaIcon from '../assets/ola.png';

const cryptoData = [
  { symbol: 'BTC', price: '$68,000', icon: btcIcon },
  { symbol: 'ETH', price: '$2,621', icon: ethIcon },
  { symbol: 'SOL', price: '$161', icon: solIcon },
  { symbol: 'AVAX', price: '$28.55', icon: avaxIcon },
  { symbol: 'TON', price: '$5.48', icon: tonIcon },
  { symbol: 'ZRO', price: '$4.41', icon: zroIcon },
  { symbol: 'OLA', price: '$0.02', icon: olaIcon },
];

const CryptoTicker: React.FC = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 py-2 overflow-hidden">
      <div className="ticker-container">
        {[...cryptoData, ...cryptoData].map((data, index) => (
          <div key={index} className="ticker-item text-black dark:text-white">
            <span className="mr-2">
              <img src={data.icon} alt={data.symbol} width={20} height={20} />
            </span>
            <span className="font-semibold">{data.symbol}</span>
            <span className="ml-2">{data.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;