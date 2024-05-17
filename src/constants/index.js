import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitIcon7,
  benefitIcon8,
  benefitIcon9,
  benefitImage2,
  check,
  number2,
  number3,
  number4,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  animation1,
  animation2,
  animation3,
  animation4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  binance,
  bytbit,
  coinbase,
  okx,
  kraken,
  bitstamp,
  bitfinex,
  gemini,
  bitcoin,
  bnb,
  cardano,
  xrp,
  doge,
  ethereum,
  tether,
  usdc,
  solana,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const dashboardFeatures = [
  {
    id: "0",
    title: "Real-time Analytics",
    number: check,
  },
  {
    id: "1",
    title: "Customizable Widgets",
    number: number2,
  },
  {
    id: "2",
    title: "Portfolio Overview",
    number: number3,
  },
  {
    id: "3",
    title: "Advanced Charting Tools",
    number: number4,
  },
];

export const avatarIcons = [avatar1, avatar2, avatar3, avatar4, avatar5];

export const roadmap = [
  {
    id: "0",
    title: "Sign Up",
    text: "Create an account by signing up with your email address and setting up a password",
    date: "STEP 1",
    animationData: animation4,
    colorful: true,
  },
  {
    id: "1",
    title: "Connect your Accounts",
    text: "Connect your crypto exchange accounts (e.g., Binance, Coinbase) to CoinProphet for unified portfolio management.",
    date: "STEP 2",
    animationData: animation3,
  },
  {
    id: "2",
    title: "Explore Features",
    text: "Navigate through the dashboard to explore features such as real-time market data, portfolio tracking, and trade alerts.",
    date: "STEP 3",
    animationData: animation2,
    
  },
  {
    id: "3",
    title: "Optimize Strategy with AI",
    text: "Utilize advanced analytics and AI-driven insights to optimize your investment strategy, enhance your portfolio, and maximize returns.",
    date: "STEP 4",
    animationData: animation1,
    colorful: true
  },
];

export const numberIcons = [check, number2, number3];

export const signupTexts = [
  {
    id: "0",
    number: 0,
    title: "Unified Portfolio Management",
    description:
      " CoinProphet consolidates accounts, simplifying portfolio tracking, strategy optimization across exchanges like Binance, Coinbase, and more.",
  },
  {
    id: "1",
    number: 1,
    title: "Cross-Platform Trading Insights",
    description:
      "CoinProphet offers market analysis, AI predictions across Binance, Kraken, etc., empowering users to maximize returns efficiently.",
  },
  {
    id: "2",
    number: 2,
    title: "Enhanced Security",
    description:
      "Safeguard assets with CoinProphet's security measures across exchanges like Binance, Gemini, ensuring peace of mind for your investments.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Binance",
    icon: binance,
    width: 40,
    height: 40,
  },
  {
    id: "1",
    title: "Coinbase",
    icon: coinbase,
    width: 38,
    height: 36,
  },
  {
    id: "2",
    title: "Okx",
    icon: okx,
    width: 44,
    height: 28,
  },
  {
    id: "3",
    title: "Bitstamp",
    icon: bitstamp,
    width: 38,
    height: 35,
  },
  {
    id: "4",
    title: "Gemini",
    icon: gemini,
    width: 43,
    height: 34,
  },
  {
    id: "5",
    title: "Kraken",
    icon: kraken,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Bytbit",
    icon: bytbit,
    width: 40,
    height: 34,
  },
  {
    id: "7",
    title: "Bitfinex",
    icon: bitfinex,
    width: 38,
    height: 32,
  },
];

export const collabCoins = [
  {
    id: "0",
    title: "Bitcoin",
    icon: bitcoin,
    width: 40,
    height: 40,
  },
  {
    id: "1",
    title: "Ethereum",
    icon: ethereum,
    width: 38,
    height: 36,
  },
  {
    id: "2",
    title: "Tether",
    icon: tether,
    width: 44,
    height: 28,
  },
  {
    id: "3",
    title: "Usdc",
    icon: usdc,
    width: 38,
    height: 35,
  },
  {
    id: "4",
    title: "Doge",
    icon: doge,
    width: 43,
    height: 34,
  },
  {
    id: "5",
    title: "Xrp",
    icon: xrp,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Solana",
    icon: solana,
    width: 40,
    height: 34,
  },
  {
    id: "7",
    title: "Cardano",
    icon: cardano,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Free",
    cta: false,
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      { id: "0", name: "Real Time Market Data", included: true },
      { id: "1", name: "Portfolio Management", included: false },
      { id: "2", name: "Trade Alerts", included: false },
      { id: "3", name: "Advanced Analytics", included: false },
      { id: "4", name: "Customizable Dashboards", included: false },
      { id: "5", name: "Portfolio Optimization Tools", included: false },
      { id: "6", name: "AI-Powered Investment Suggestions", included: false },
      { id: "7", name: "Automated Trading", included: false },
      { id: "8", name: "Dedicated Customer Support", included: false },
    ],
  },

  {
    id: "1",
    title: "Starter",
    cta: false,
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "5.99",
    features: [
      { id: "0", name: "Real Time Market Data", included: true },
      { id: "1", name: "Portfolio Management", included: true },
      { id: "2", name: "Trade Alerts", included: true },
      { id: "3", name: "Advanced Analytics", included: false },
      { id: "4", name: "Customizable Dashboards", included: false },
      { id: "5", name: "Portfolio Optimization Tools", included: false },
      { id: "6", name: "AI-Powered Investment Suggestions", included: false },
      { id: "7", name: "Automated Trading", included: false },
      { id: "8", name: "Dedicated Customer Support", included: false },
    ],
  },
  {
    id: "2",
    title: "Investor",
    cta: true,
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      { id: "0", name: "Real Time Market Data", included: true },
      { id: "1", name: "Portfolio Management", included: true },
      { id: "2", name: "Trade Alerts", included: true },
      { id: "3", name: "Advanced Analytics", included: true },
      { id: "4", name: "Customizable Dashboards", included: true },
      { id: "5", name: "Portfolio Optimization Tools", included: true },
      { id: "6", name: "AI-Powered Investment Suggestions", included: false },
      { id: "7", name: "Automated Trading", included: false },
      { id: "8", name: "Dedicated Customer Support", included: false },
    ],
  },
  {
    id: "3",
    title: "Pro",
    cta: false,
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: "28.99",
    features: [
      { id: "0", name: "Real Time Market Data", included: true },
      { id: "1", name: "Portfolio Management", included: true },
      { id: "2", name: "Trade Alerts", included: true },
      { id: "3", name: "Advanced Analytics", included: true },
      { id: "4", name: "Customizable Dashboards", included: true },
      { id: "5", name: "Portfolio Optimization Tools", included: true },
      { id: "6", name: "AI-Powered Investment Suggestions", included: true },
      { id: "7", name: "Automated Trading", included: true },
      { id: "8", name: "Dedicated Customer Support", included: true },
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Market Analysis",
    text: "Provide real-time analysis of market trends, including price movements, trading volumes, and sentiment analysis.",
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "1",
    title: "Portfolio Management",
    text: "Help users manage their crypto portfolios by tracking holdings, calculating profits/losses, and suggesting rebalancing strategies.",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Investment Recommendations",
    text: "Offer personalized investment recommendations based on user preferences, risk tolerance, and investment goals.",
    backgroundUrl: "src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Automated Trading",
    text: "Execute trades automatically based on predefined criteria and market signals, optimizing entry and exit points to maximize returns.",
    backgroundUrl: "src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Price Alerts",
    text: "Notify users of significant price movements or market events for specific cryptocurrencies they are interested in.",
    backgroundUrl: "src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "5",
    title: "Educational Resources",
    text: "Provide educational content such as articles, tutorials, and guides to help users understand crypto markets and investment strategies better.",
    backgroundUrl: "src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
  {
    id: "6",
    title: "Community Engagement",
    text: "Facilitate community interaction by hosting forums, Q&A sessions, and discussions where users can share insights and learn from each other.",
    backgroundUrl: "src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon7,
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "Performance Tracking",
    text: "Track the performance of users' investments over time, generating reports and insights to help them make informed decisions.",
    backgroundUrl: "src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon8,
    imageUrl: benefitImage2,
  },
  {
    id: "8",
    title: "Customization Options",
    text: "Allow users to customize their experience by adjusting parameters such as risk levels, investment horizons, and preferred trading strategies.",
    backgroundUrl: "src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon9,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
