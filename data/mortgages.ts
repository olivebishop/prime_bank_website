import { Home, Users, RefreshCw, Building } from 'lucide-react';

export const mortgageProducts = [
  {
    id: 'first-time-buyers',
    name: 'First Time Buyers',
    description: 'Perfect for those taking their first step onto the property ladder. Get expert guidance and competitive rates designed specifically for first-time buyers.',
    icon: Home,
    rate: 'From 4.29%',
    minDeposit: '5%',
    maxLoan: '£500k',
    features: [
      'Low deposit options from 5%',
      'First-time buyer exclusive rates',
      'Free mortgage advice',
      'Help to Buy scheme eligible',
      'Shared ownership options'
    ],
    benefits: [
      'Dedicated first-time buyer support',
      'Government scheme access',
      'Lower initial costs'
    ]
  },
  {
    id: 'home-movers',
    name: 'Home Movers',
    description: 'Moving to your next home? Our home mover mortgages offer flexible terms and competitive rates to help you upgrade or relocate with confidence.',
    icon: Users,
    rate: 'From 3.99%',
    minDeposit: '10%',
    maxLoan: '£1M',
    features: [
      'Competitive rates for movers',
      'Flexible term options',
      'Port existing mortgage',
      'Quick approval process',
      'Moving home support'
    ],
    benefits: [
      'Seamless transition process',
      'Experienced mover rates',
      'Flexible arrangements'
    ]
  },
  {
    id: 'remortgage',
    name: 'Remortgage',
    description: 'Switch to better rates or release equity from your home. Our remortgage options help you save money or access funds for home improvements.',
    icon: RefreshCw,
    rate: 'From 3.79%',
    minDeposit: 'N/A',
    maxLoan: '£2M',
    features: [
      'Market-leading remortgage rates',
      'Equity release options',
      'Free valuation service',
      'No early repayment charges',
      'Cash back offers available'
    ],
    benefits: [
      'Lower monthly payments',
      'Access to home equity',
      'Better rate guarantees'
    ]
  },
  {
    id: 'buy-to-let',
    name: 'Buy to Let',
    description: 'Build your property portfolio with our buy-to-let mortgages. Competitive rates and flexible terms designed for property investors.',
    icon: Building,
    rate: 'From 4.49%',
    minDeposit: '25%',
    maxLoan: '£2M',
    features: [
      'Investor-focused rates',
      'Portfolio mortgage options',
      'Rental income assessment',
      'Multi-property discounts',
      'Professional landlord rates'
    ],
    benefits: [
      'Higher loan-to-value ratios',
      'Investment property expertise',
      'Portfolio management support'
    ]
  }
];