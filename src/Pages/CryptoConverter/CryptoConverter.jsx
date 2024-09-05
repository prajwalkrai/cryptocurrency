// src/Pages/CryptoConverter/CryptoConverter.jsx
import React, { useState, useEffect, useContext } from 'react';
import { CoinContext } from '../../Context/CoinContext';
import './CryptoConverter.css';

const CryptoConverter = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [fromCoin, setFromCoin] = useState('');
  const [toCoin, setToCoin] = useState('');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [conversionRate, setConversionRate] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (fromCoin && toCoin) {
      const fetchConversionRate = async () => {
        try {
          const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${fromCoin}&vs_currencies=${toCoin}`);
          const data = await response.json();
          if (data[fromCoin] && data[fromCoin][toCoin]) {
            const rate = data[fromCoin][toCoin];
            setConversionRate(rate);
            setConvertedAmount(amount * rate);
            setError('');
          } else {
            setError('Conversion rate not available');
            setConversionRate(null);
            setConvertedAmount(null);
          }
        } catch (error) {
          setError('Error fetching conversion rate');
          setConversionRate(null);
          setConvertedAmount(null);
        }
      };
      fetchConversionRate();
    }
  }, [fromCoin, toCoin, amount]);

  return (
    <div className="crypto-converter">
      <h1>Crypto Converter</h1>
      <form>
        <div className="form-group">
          <label htmlFor="from-coin">From</label>
          <select id="from-coin" value={fromCoin} onChange={(e) => setFromCoin(e.target.value)}>
            <option value="">Select Cryptocurrency</option>
            {allCoin.map(coin => (
              <option key={coin.id} value={coin.id}>{coin.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="to-coin">To</label>
          <select id="to-coin" value={toCoin} onChange={(e) => setToCoin(e.target.value)}>
            <option value="">Select Cryptocurrency</option>
            {allCoin.map(coin => (
              <option key={coin.id} value={coin.id}>{coin.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="button">Convert</button>
      </form>
      {convertedAmount !== null && (
        <div className="result">
          <h2>Converted Amount:</h2>
          <p>{currency.symbol} {convertedAmount.toFixed(2)}</p>
          <p>Conversion Rate: 1 {fromCoin} = {conversionRate} {toCoin}</p>
        </div>
      )}
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default CryptoConverter;
