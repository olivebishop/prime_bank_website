import { TrendingUp, Shield, Target, Users, Award, PiggyBank } from 'lucide-react';

export const investmentProducts = [
  {
    id: 'stocks-shares-isa',
    name: 'Stocks & Shares ISA',
    description: 'Tax-efficient investing up to £20,000 per year',
    rate: '0.35%',
    minBalance: '£25/month',
    access: 'Flexible',
    icon: TrendingUp,
    features: [
      'Tax-free growth and income',
      'Wide range of funds available',
      'Online portfolio management',
      'Regular investing from £25/month'
    ]
  },
  {
    id: 'personal-pension',
    name: 'Personal Pension',
    description: 'Build your retirement fund with tax relief',
    rate: '25%',
    minBalance: '£40,000',
    access: 'Retirement',
    icon: Shield,
    features: [
      'Tax relief on contributions',
      'Contribute up to £40,000 annually',
      'Automatic tax relief added',
      'Flexible retirement options'
    ]
  },
  {
    id: 'investment-account',
    name: 'Investment Account',
    description: 'Flexible investing beyond ISA limits',
    rate: '0.45%',
    minBalance: 'No limit',
    access: 'Anytime',
    icon: Target,
    features: [
      'No investment limits',
      'Access to global markets',
      'Individual stocks and funds',
      'Research and analysis tools'
    ]
  },
  {
    id: 'junior-isa',
    name: 'Junior ISA',
    description: 'Start investing for your child\'s future',
    rate: '£9,000',
    minBalance: '£25',
    access: 'Until 18',
    icon: Users,
    features: [
      'Tax-free growth until 18',
      'Family and friends can contribute',
      'Range of investment options',
      'No management fees under £1,000'
    ]
  },
  {
    id: 'wealth-management',
    name: 'Wealth Management',
    description: 'Bespoke investment solutions for £100k+',
    rate: '1:1',
    minBalance: '£100,000',
    access: 'Dedicated',
    icon: Award,
    features: [
      'Personal investment advisor',
      'Tailored investment strategy',
      'Regular portfolio reviews',
      'Access to exclusive investments'
    ]
  },
  {
    id: 'cash-isa',
    name: 'Cash ISA',
    description: 'Tax-free cash savings with guaranteed returns',
    rate: '3.8%',
    minBalance: '£1',
    access: 'Flexible',
    icon: PiggyBank,
    features: [
      'Tax-free interest',
      'Guaranteed returns',
      '£20,000 annual allowance',
      'FSCS protected'
    ]
  }
];

export const investmentBenefits = [
  {
    id: 'expert-team',
    title: 'Expert Investment Team',
    description: 'Our experienced investment professionals combine global expertise with local market knowledge',
    icon: Users
  },
  {
    id: 'award-winning',
    title: 'Award-Winning Platform',
    description: 'Multiple awards for ease of use, research tools, and customer satisfaction',
    icon: Award
  },
  {
    id: 'competitive-fees',
    title: 'Competitive Fees',
    description: 'Transparent, low-cost fee structure with no hidden charges or surprise fees',
    icon: Target
  },
  {
    id: 'comprehensive-support',
    title: 'Comprehensive Support',
    description: 'From online resources to one-on-one consultations, we provide complete support',
    icon: Shield
  }
];

export const investmentPhilosophy = [
  {
    id: 'long-term-focus',
    title: 'Long-term Focus',
    description: 'We believe in patient capital and long-term wealth building through market cycles'
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    description: 'Diversification and careful risk assessment to protect and grow your wealth'
  },
  {
    id: 'innovation-growth',
    title: 'Innovation & Growth',
    description: 'African heritage of innovation with the stability of traditional British banking'
  }
];