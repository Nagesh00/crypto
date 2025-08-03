# Crypto News Website 🚀

A modern cryptocurrency news and market data website built with Next.js, featuring real-time price data, interactive charts, and automated deployment via GitHub Actions.

## Features

- **Live Market Data**: Real-time cryptocurrency prices from CoinGecko API
- **Interactive Charts**: Beautiful price visualization using Chart.js
- **Responsive Design**: Modern UI with Tailwind CSS
- **Automated Deployment**: GitHub Actions workflow for continuous deployment
- **Static Export**: Optimized for GitHub Pages hosting
- **Market Analysis**: Latest trends and market insights

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **API**: CoinGecko API for cryptocurrency data
- **HTTP Client**: Axios
- **Deployment**: GitHub Actions + GitHub Pages
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/crypto-news.git
cd crypto-news
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
crypto-news/
├── .github/workflows/     # GitHub Actions workflows
├── components/           # React components
├── lib/                 # API utilities and helpers
├── posts/               # Blog posts in Markdown
├── public/              # Static assets
├── src/app/             # Next.js app directory
└── out/                 # Static export output
```

## Key Components

### API Integration (`lib/cryptoApi.js`)
- Fetches trending coins from CoinGecko
- Retrieves market data for multiple cryptocurrencies
- Error handling and fallback data

### Live Market Table (`components/LiveMarketTable.js`)
- Real-time price updates every 60 seconds
- Interactive price chart
- Responsive table design
- Loading states and error handling

### GitHub Actions (`github/workflows/deploy.yml`)
- Automatic builds on push to main/master
- Scheduled builds every hour
- Static site deployment to GitHub Pages

## Deployment

The site automatically deploys to GitHub Pages when:
- Code is pushed to the main/master branch
- Every hour via scheduled GitHub Action
- Manually triggered from the Actions tab

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `out/` directory.

## Environment Setup

No environment variables are required for the basic setup as we're using the free CoinGecko API endpoints. For production with higher rate limits, you can add:

```env
NEXT_PUBLIC_COINGECKO_API_KEY=your_api_key_here
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## API Rate Limits

- CoinGecko free tier: 10-50 calls/minute
- Consider caching and rate limiting for production use
- Premium API key recommended for high-traffic sites

## Future Enhancements

- [ ] Add more cryptocurrency exchanges
- [ ] Implement portfolio tracking
- [ ] Add price alerts and notifications
- [ ] Include news aggregation
- [ ] Add technical analysis indicators
- [ ] Implement user authentication
- [ ] Add dark/light theme toggle

## License

MIT License - see LICENSE file for details.

## Acknowledgments

- [CoinGecko](https://coingecko.com/) for cryptocurrency data
- [Chart.js](https://chartjs.org/) for charting capabilities
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
