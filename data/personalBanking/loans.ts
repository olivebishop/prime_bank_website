import { CreditCard, Calculator, Clock, Shield, CheckCircle, TrendingUp } from 'lucide-react';

export const personalLoansData = [
  {
    id: 'standard-loan',
    name: "Standard Personal Loan",
    type: "Most Popular",
    icon: CreditCard,
    description: "Perfect for home improvements, debt consolidation, or major purchases with competitive rates and flexible terms.",
    borrowAmount: "£1,000 - £25,000",
    apr: "from 3.9%",
    term: "1-5 years",
    features: [
      "No early repayment fees",
      "Quick online application",
      "Same-day approval decision",
      "Funds available within 24 hours",
      "No arrangement fees",
      "Flexible repayment options",
      "24/7 online account management",
      "Direct debit payment options"
    ]
  },
  {
    id: 'premium-loan',
    name: "Premium Personal Loan",
    type: "Best Rate",
    icon: TrendingUp,
    description: "Our lowest rates for existing customers with excellent credit history. Ideal for larger amounts and longer terms.",
    borrowAmount: "£15,000 - £50,000",
    apr: "from 2.9%",
    term: "2-7 years",
    features: [
      "Lowest available rates",
      "Priority application processing",
      "Dedicated customer support",
      "Payment holiday options",
      "No early repayment fees",
      "Instant online decisions",
      "Free life insurance option",
      "Flexible overpayment terms"
    ]
  }
];

export const loanBenefitsData = [
  {
    icon: Shield,
    title: "No Hidden Fees",
    description: "Transparent pricing with no arrangement fees or early repayment charges"
  },
  {
    icon: Clock,
    title: "Quick Decisions",
    description: "Get an instant decision online with funds available within 24 hours"
  },
  {
    icon: CheckCircle,
    title: "Flexible Terms",
    description: "Choose repayment terms from 1-7 years to suit your budget"
  },
  {
    icon: Calculator,
    title: "Competitive Rates",
    description: "Representative APR from 3.9% with our best rates for existing customers"
  }
];