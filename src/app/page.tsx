import LiveMarketTable from '../../components/LiveMarketTable';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Crypto Trends Today 🚀
          </h1>
          <p className="mt-2 text-gray-600">
            Real-time cryptocurrency market data and analysis
          </p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Live Market Prices
          </h2>
          <p className="text-gray-600 mb-6">
            Prices update in real-time in your browser.
          </p>
          <LiveMarketTable />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            📈 Market Analysis
          </h2>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">Today&apos;s Market Overview</h3>
            <p className="text-gray-600 leading-relaxed">
              The cryptocurrency market continues to show strong momentum with 
              increased institutional adoption and growing retail interest. 
              Bitcoin maintains its position as the market leader, while 
              alternative cryptocurrencies are gaining traction in various sectors.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800">Market Sentiment</h4>
                <p className="text-green-600">Bullish</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800">Trading Volume</h4>
                <p className="text-blue-600">High</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800">Volatility</h4>
                <p className="text-yellow-600">Moderate</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; 2025 Crypto News. Built with Next.js and powered by CoinGecko API.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
