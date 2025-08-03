// components/LiveMarketTable.js
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getMarketData } from '../lib/cryptoApi';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LiveMarketTable = () => {
  const [marketData, setMarketData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data immediately on load, then every 60 seconds
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getMarketData(['bitcoin', 'ethereum', 'solana', 'dogecoin']);
      setMarketData(data);
      setIsLoading(false);
    };
    
    fetchData();
    const interval = setInterval(fetchData, 60000); // 60 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  if (isLoading) {
    return <div className="text-center p-4">Loading market data...</div>;
  }

  const chartData = {
    labels: marketData.map(coin => coin.name),
    datasets: [
      {
        label: 'Price in USD',
        data: marketData.map(coin => coin.current_price),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  return (
    <div className="p-6">
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coin</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (USD)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {marketData.map(coin => (
              <tr key={coin.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Image src={coin.image} alt={coin.name} width={25} height={25} className="mr-3" />
                    <span className="font-medium text-gray-900">{coin.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${coin.current_price.toLocaleString()}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${coin.market_cap.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-bold mb-4">Top Coins Price Chart</h3>
        <div className="bg-white p-4 rounded-lg shadow">
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default LiveMarketTable;
