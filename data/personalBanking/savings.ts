import { PiggyBank, Shield, TrendingUp, Target, Check } from 'lucide-react';

export interface SavingsProduct {
  id: string;
  name: string;
  rate: string;
  description: string;
  icon: any;
  minBalance: string;
  access: string;
}

export const savingsProducts: SavingsProduct[] = [
  {
    id: 'easy-access',
    name: "Easy Access Savings",
    rate: "4.25% AER",
    description: "Perfect for emergency funds with unlimited access to your money. No minimum balance required and competitive interest rates.",
    icon: PiggyBank,
    minBalance: "$0",
    access: "Unlimited"
  },
  {
    id: 'cash-isa',
    name: "Cash ISA",
    rate: "4.75% AER",
    description: "Maximize your tax-free savings allowance with our market-leading ISA rates. Up to $20,000 annual allowance.",
    icon: Shield,
    minBalance: "$1",
    access: "Tax-free"
  },
  {
    id: 'fixed-rate',
    name: "Fixed Rate Bond",
    rate: "5.15% AER",
    description: "Lock in today's great rates for guaranteed returns. Choose terms from 12 to 60 months with no fees.",
    icon: TrendingUp,
    minBalance: "$1,000",
    access: "12-60 months"
  },
  {
    id: 'premium-saver',
    name: "Premium Saver",
    rate: "4.50% AER",
    description: "Enhanced rates for substantial balances with dedicated relationship management and exclusive opportunities.",
    icon: Target,
    minBalance: "$25,000",
    access: "Limited"
  }
];
export const savingsBenefits = [
    { 
      id: 'protected', 
      icon: Shield, 
      title: 'FSCS Protected', 
      description: 'Your deposits are protected up to $85,000 under the Financial Services Compensation Scheme' 
    },
    { 
      id: 'no-fees', 
      icon: Check, 
      title: 'No Hidden Fees', 
      description: 'Transparent pricing with no monthly charges or maintenance fees on your savings account' 
    },
    { 
      id: 'competitive', 
      icon: Target, 
      title: 'Competitive Rates', 
      description: 'Market-leading interest rates on all accounts to help your money grow faster' 
    },
    { 
      id: 'flexible', 
      icon: PiggyBank, 
      title: 'Flexible Access', 
      description: 'Easy access to your savings with online banking and mobile app management' 
    }
  ];