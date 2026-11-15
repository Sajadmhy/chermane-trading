export const links = {
  youtube: 'https://www.youtube.com/@chermane',
  latestVideo: 'https://www.youtube.com/watch?v=eUmfc1bze-8',
  instagram: 'https://www.instagram.com/chermane_trades',
  x: 'https://x.com/chermanetrades',
  email: 'chermanetrades@outlook.com',
};

export const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#youtube', label: 'YouTube' },
  { href: '#socials', label: 'Socials' },
];

export const tickerItems = [
  'Live trade signals',
  'Entry · Stop loss · Take profit',
  'Nasdaq futures',
  'Mon–Fri',
  '10am–12pm EST',
  '5 trading models',
  'Daily reviews',
  'Weekly homework',
];

export const steps = [
  { title: 'Pick a plan', text: 'Secure checkout through Whop.' },
  {
    title: 'Connect your Discord',
    text: 'Access is sent to the email you used at checkout. Connect your Discord to get your role automatically.',
  },
  { title: 'Trade the session', text: 'Signals go out live Monday–Friday between 10am and 12pm EST.' },
];

export const reviews = [
  {
    name: 'Shalonn I.',
    since: 'May 2025',
    quote:
      "I just want to say how grateful I am to have found Chermane's trading Discord. He really has a gift for teaching ICT concepts in a way that just clicks.",
  },
  {
    name: 'Sergio M.',
    since: 'October 2024',
    quote:
      "My trading experience has grown 100%. It's now an enjoyable experience and I am secure and profitable. Best investment of my life.",
  },
  {
    name: 'Jack T.',
    since: 'May 2025',
    quote:
      "Chermane has really elevated my trading in only a week of joining this Discord. My trading has been the best it's ever been.",
  },
  {
    name: 'Augustin T.',
    since: 'May 2025',
    quote:
      'The most authentic trader streaming. If you TRULY want to learn how to read price action, this is the place to be.',
  },
  {
    name: 'Ulysses J.',
    since: 'July 2025',
    quote:
      "Chermane's Discord is amazing. Structured and digestible content for beginners as well as advanced traders.",
  },
  {
    name: 'Anthony D.',
    since: 'August 2025',
    quote:
      "I learned more than I've ever learned from any other Discord. Passed my Apex account today with Chermane's teachings!",
  },
];

export type Plan = {
  name: string;
  tag: string;
  note: string;
  price: string;
  was?: string;
  per: string;
  equiv?: string;
  features: string[];
  href: string;
  hot?: boolean;
};

export const plans: Plan[] = [
  {
    name: 'Monthly',
    tag: 'Most popular',
    note: 'Start this week.',
    price: '$50',
    per: '/month',
    features: [
      'Live trade signals Mon–Fri',
      'Daily breakdowns & reviews',
      '5 trading models',
      'Homework & educational videos',
    ],
    href: 'https://whop.com/checkout/plan_yQVdQr6MlHYM8',
  },
  {
    name: '3 Months',
    tag: 'Save 20%',
    note: 'Best deal — save 20%',
    price: '$120',
    was: '$150',
    per: '/3 months',
    equiv: "That's $40 a month — the lowest monthly price.",
    features: [
      'Everything in Monthly',
      'Special Discord tag',
      "Private members' chat room",
      'Lowest monthly price',
    ],
    href: 'https://whop.com/checkout/plan_qiJscVhk0l4BJ',
    hot: true,
  },
  {
    name: 'Lifetime + Course',
    tag: 'One time',
    note: 'The final investment in yourself',
    price: '$1,000',
    per: 'one time',
    features: [
      'Lifetime trading group access',
      'Lifetime trading course access',
      'Everything I use to trade',
      'Quizzes, PDFs & lectures',
    ],
    href: 'https://whop.com/checkout/plan_yFbXJuzgrWj36',
  },
];

export const assurances = [
  'Cancel anytime through Whop',
  'Access sent to your email right after payment',
  'Every alert stays posted in the Discord',
];

export const socials = [
  { name: 'Instagram', handle: '@chermane_trades', href: links.instagram },
  { name: 'X', handle: '@chermanetrades', href: links.x },
  { name: 'YouTube', handle: 'Chermane Trades', href: links.youtube },
];

export const faqs = [
  {
    q: 'How often does Chermane send out signals?',
    a: 'Roughly 2–4 trade signals per week, posted live Monday–Friday between 10am and 12pm EST. Every signal includes entry, stop loss, and take profit details in real time.',
  },
  {
    q: 'Tell me more about the trading course.',
    a: 'The Lifetime plan includes the full trading course: everything Chermane uses to trade, broken into lectures, PDFs, and quizzes, plus lifetime access to the trading group.',
  },
  {
    q: "What's the expected return?",
    a: 'We aim for 6–8% a month. Returns are never guaranteed. Trading involves substantial risk and results vary by person.',
  },
  {
    q: 'What markets do you trade?',
    a: 'Nasdaq futures only. Every signal is a Nasdaq futures trade taken during the New York session.',
  },
  {
    q: 'Is this good for beginners?',
    a: 'Yes. You can follow the signals while learning the reasoning behind each trade. The education side of the community is built to take you from the basics to a consistent, disciplined process.',
  },
  {
    q: "What if I can't be online between 10am and 12pm EST?",
    a: 'Every alert stays posted in the Discord, so you can review the setups, entries, and outcomes later and keep learning from them, even if you miss the live window.',
  },
  {
    q: 'How much money do I need to start?',
    a: 'There is no required minimum. The server includes a risk management guide that shows you how to size your positions for your account. Only trade with money you can afford to lose.',
  },
  {
    q: 'Can I cancel my membership?',
    a: 'Yes. You can cancel anytime through Whop, and you keep access until the end of your current billing period. All purchases are final and non-refundable.',
  },
  {
    q: 'I purchased access. Now what?',
    a: "Checkout is handled by Whop. Right after payment, access will be sent to the email you used at checkout, and you'll be prompted to connect your Discord to get your role automatically. If anything goes wrong, reach out using the contact email below.",
  },
];
