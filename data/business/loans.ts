import { Briefcase, Calculator, Clock, DollarSign, Factory, Shield, Store, Target, TrendingUp, Truck, Users, Zap } from "lucide-react";

export const businessLoans = [
  {
    id: 'term-loan',
    name: 'Term Loan',
    description: 'Traditional business loan with fixed rates and predictable monthly payments',
    icon: DollarSign,
    amount: 'Up to $500K',
    rate: 'From 5.9% APR',
    term: '1-7 years',
    benefits: ['Fixed monthly payments', 'No prepayment penalties', 'Fast approval process', 'Flexible use of funds', 'Build business credit']
  },
  {
    id: 'line-of-credit',
    name: 'Business Line of Credit',
    description: 'Flexible credit line for working capital and cash flow management',
    icon: TrendingUp,
    amount: 'Up to $250K',
    rate: 'From 7.2% APR',
    term: 'Revolving credit',
    benefits: ['Pay interest only on used funds', 'Access funds anytime', 'Automatic renewals', 'Online account management', 'Emergency funding ready']
  },
  {
    id: 'equipment-finance',
    name: 'Equipment Financing',
    description: 'Specialized financing for business equipment and machinery purchases',
    icon: Factory,
    amount: 'Up to $1M',
    rate: 'From 6.5% APR',
    term: '2-10 years',
    benefits: ['Equipment as collateral', 'Tax advantages available', '100% financing options', 'Preserve working capital', 'Flexible payment terms']
  },
  {
    id: 'sba-loan',
    name: 'SBA Loans',
    description: 'Government-backed loans with favorable terms for qualifying businesses',
    icon: Shield,
    amount: 'Up to $5M',
    rate: 'From 4.8% APR',
    term: '5-25 years',
    benefits: ['Lower down payments', 'Competitive rates', 'Longer repayment terms', 'Government backing', 'Various SBA programs']
  }
];

export const loanBenefits = [
  {
    id: 'quick-approval',
    title: 'Quick Approval Process',
    description: 'Get pre-approved in minutes with our streamlined digital application process',
    icon: Zap
  },
  {
    id: 'competitive-rates',
    title: 'Competitive Interest Rates',
    description: 'Access some of the market\'s most competitive rates based on your business profile',
    icon: Target
  },
  {
    id: 'flexible-terms',
    title: 'Flexible Repayment Terms',
    description: 'Choose repayment schedules that align with your business cash flow patterns',
    icon: Clock
  },
  {
    id: 'expert-guidance',
    title: 'Expert Loan Guidance',
    description: 'Work with experienced business lending specialists throughout the process',
    icon: Users
  },
  {
    id: 'transparent-pricing',
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise charges - know exactly what you\'ll pay upfront',
    icon: Calculator
  },
  {
    id: 'business-growth',
    title: 'Fuel Business Growth',
    description: 'Invest in expansion, inventory, equipment, or working capital to scale your business',
    icon: Briefcase
  }
];

export const loanPhilosophy = [
  {
    id: 'partnership',
    title: 'True Partnership',
    description: 'We\'re not just lenders - we\'re partners invested in your business success and long-term growth.'
  },
  {
    id: 'accessibility',
    title: 'Accessible Financing',
    description: 'Making business financing accessible to companies of all sizes, from startups to established enterprises.'
  },
  {
    id: 'innovation',
    title: 'Smart Technology',
    description: 'Leveraging advanced technology to streamline the lending process and provide faster decisions.'
  }
];

// Use cases for business loans
export const loanUseCases = [
  {
    id: 'expansion',
    title: 'Business Expansion',
    description: 'Open new locations, enter new markets, or scale operations',
    icon: Store
  },
  {
    id: 'equipment',
    title: 'Equipment Purchase',
    description: 'Buy machinery, vehicles, or technology to improve efficiency',
    icon: Truck
  },
  {
    id: 'inventory',
    title: 'Inventory & Stock',
    description: 'Purchase seasonal inventory or bulk stock for better margins',
    icon: Factory
  },
  {
    id: 'working-capital',
    title: 'Working Capital',
    description: 'Manage cash flow gaps and cover operational expenses',
    icon: DollarSign
  }
];
