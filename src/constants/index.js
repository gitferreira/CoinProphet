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
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  animation1,
  animation2,
  animation3,
  animation4,
  searchMd,
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
  blog1,
  blog2,
  blog3,
  blog4,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Market Data",
    url: "/market",
  },
  {
    id: "1",
    title: "Features",
    url: "/features",
  },
  {
    id: "2",
    title: "Pricing",
    url: "/pricing",
  },
  {
    id: "3",
    title: "Blog",
    url: "/blog",
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
    colorful: true,
  },
];

export const numberIcons = [check, number2, number3, number4];

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

export const featureTexts = [
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

  {
    id: "3",
    number: 3,
    title: "Automated Trading",
    description:
      "Execute trades automatically with CoinProphet's AI-driven algorithms, optimizing entry and exit points to maximize your investment returns effortlessly.",
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

export const faq = [
  {
    id: "1",
    title: "What is CoinProphet and how does it work?",
    description:
      "CoinProphet is an AI-powered crypto investment platform that provides real-time market data, advanced analytics, and personalized investment suggestions to help you optimize your crypto investments.",
  },
  {
    id: "2",
    title: "How do I connect my crypto exchange accounts to CoinProphet?",
    description:
      "After signing up, navigate to the 'Connect Accounts' section in the dashboard. Follow the instructions to link your crypto exchange accounts such as Binance, Coinbase, and others securely.",
  },
  {
    id: "3",
    title: "Is my personal and financial information secure with CoinProphet?",
    description:
      "Yes, CoinProphet employs advanced security protocols, including encryption and multi-factor authentication, to ensure that your personal and financial information is protected.",
  },
  {
    id: "4",
    title: "Can I use CoinProphet on my mobile device?",
    description:
      "Absolutely! CoinProphet has a mobile app that allows you to stay connected and manage your investments on the go, ensuring you never miss an opportunity.",
  },
  {
    id: "5",
    title: "What features are included in the free package?",
    description:
      "The free package includes basic portfolio tracking and access to real-time market data. You can upgrade to a higher plan for additional features like advanced analytics and AI-powered investment suggestions.",
  },
  {
    id: "6",
    title: "How does the AI-powered investment suggestion feature work?",
    description:
      "Our AI algorithms analyze market trends, historical data, and your investment preferences to provide personalized suggestions that help you make smarter investment decisions.",
  },
  {
    id: "7",
    title: "Can CoinProphet execute trades on my behalf?",
    description:
      "Yes, with the Pro Pack, CoinProphet offers automated trading based on predefined criteria and market signals, allowing you to execute trades automatically.",
  },
  {
    id: "8",
    title: "What kind of customer support does CoinProphet offer?",
    description:
      "CoinProphet provides dedicated customer support to all users. Pro Pack subscribers have access to priority support with dedicated assistance for technical issues and inquiries.",
  },
  {
    id: "9",
    title: "Can I customize my dashboard on CoinProphet?",
    description:
      "Yes, users with the Advanced Pack and above can personalize their dashboard with customizable widgets and layouts to suit their preferences.",
  },
  {
    id: "10",
    title: "How do I optimize my investment strategy with CoinProphet?",
    description:
      "Utilize CoinProphet's advanced analytics and AI-driven insights to analyze market trends, optimize your portfolio, and make data-driven investment decisions to maximize your returns.",
  },
];

export const blogPosts = [
  {
    id: "future",
    title:
      "The Future of DeFi: Decentralized Finance",
    text1:
      "Explore the transformative impact of decentralized finance (DeFi) on the traditional banking system. Learn how DeFi platforms are enabling peer-to-peer transactions, reducing fees, and providing greater financial inclusion across the globe. This post dives into the latest innovations in DeFi, including smart contracts, yield farming, and decentralized exchanges (DEXs).",
    text2:
      "Understand the key projects driving this change, such as Ethereum, Aave, and Uniswap, and what these developments mean for the future of finance as we know it. Additionally, we will discuss the challenges DeFi faces, including regulatory concerns and security risks, and how the industry is addressing them to create a more resilient financial ecosystem.",
    image: blog1,
    number: "1",
  },
  {
    id: "top-10",
    title: "Top 10 Emerging Cryptocurrencies to Watch in 2024",
    text1:
      "Stay ahead of the curve by discovering the top 10 emerging cryptocurrencies that are set to make waves in 2024. From innovative technologies to promising use cases, find out which coins you should keep an eye on. This comprehensive guide covers the potential of each cryptocurrency, their unique features, and why they could be the next big thing in the crypto world. ",
    text2:
      "We will delve into projects focusing on privacy, scalability, and interoperability, such as Polkadot, Solana, and Chainlink. Additionally, learn about new tokens in decentralized finance (DeFi), non-fungible tokens (NFTs), and blockchain-based gaming, which are pushing the boundaries of what cryptocurrencies can achieve.",
    image: blog2,
    number: "2",
  },
  {
    id: "crypto-security",
    title: "Crypto Security: Best Practices for Protecting Your Digital Assets",
    text1:
      "In the ever-evolving world of cryptocurrencies, security is paramount. This blog post delves into the best practices for safeguarding your digital assets. Learn about secure wallets, the importance of two-factor authentication, and how to recognize and avoid phishing scams. We will also cover the role of hardware wallets versus software wallets, the benefits of cold storage, and how to securely manage your private keys.",
    text2:
      " By following these expert tips, you can ensure your crypto investments remain safe from hackers and other security threats. Moreover, we will explore recent security breaches in the crypto world, what went wrong, and how you can learn from these incidents to protect your assets.",
    image: blog3,
    number: "3",
  },
  {
    id: "ai",
    title:
      "The Role of AI in Crypto Trading: Enhancing Strategies ",
    text1:
      "Discover how artificial intelligence is shaping the future of crypto trading. Learn about AI-driven trading bots, predictive analytics, and how these technologies can help investors optimize strategies and achieve higher returns in the volatile crypto market. This post explores the benefits of AI in trading, such as improved accuracy, speed, and the ability to process vast amounts of data.",
    text2:
      "We will discuss how AI algorithms analyze market trends, historical data, and social sentiment to make informed trading decisions. Additionally, understand the different types of AI trading bots available, from arbitrage bots to market-making bots, and how to choose the right one for your trading needs. Finally, we will look at the ethical considerations and potential risks associated with AI in trading, ensuring you are well-equipped to harness its power responsibly.",
    image: blog4,
    number: "4",
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
