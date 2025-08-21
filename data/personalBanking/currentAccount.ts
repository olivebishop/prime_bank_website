import { CreditCard, Shield, Star, Users } from 'lucide-react';

export const currentAccountsData = [
  {
    id: 'prime-current',
    name: "Prime Current Account",
    type: "Most Popular",
    monthlyFee: "$0",
    overdraft: "Up to $2,000",
    rating: 4.8,
    users: "2.5M+",
    icon: CreditCard,
    description: "Perfect for everyday banking with all the essential features you need, completely free of monthly charges.",
    features: [
      "No monthly account fees",
      "Contactless payments up to $100",
      "24/7 mobile banking app",
      "Instant spending notifications",
      "Fee-free cash withdrawals in UK",
      "Direct debit guarantee",
      "Open Banking compatible",
      "Budgeting tools included"
    ],
    benefits: [
      "Mobile banking",
      "Contactless payments",
      "Overdraft available",
      "No hidden fees"
    ],
    highlight: "Perfect for everyday banking"
  },
  {
    id: 'prime-plus',
    name: "Prime Plus Account",
    type: "Premium Experience",
    monthlyFee: "$15",
    overdraft: "Up to $5,000",
    rating: 4.9,
    users: "750K+",
    icon: Shield,
    description: "Premium banking with exclusive perks, travel benefits, and priority support for those who want more.",
    features: [
      "All Prime Current Account features",
      "Priority customer support",
      "Travel insurance included",
      "Phone & gadget insurance",
      "Worldwide fee-free cash withdrawals",
      "Exclusive rewards and cashback",
      "Concierge services",
      "Airport lounge access"
    ],
    benefits: [
      "Travel insurance",
      "Priority support",
      "Worldwide withdrawals",
      "Exclusive rewards"
    ],
    highlight: "Premium banking with exclusive perks"
  },
  {
    id: 'student-account',
    name: "Student Current Account",
    type: "For Students",
    monthlyFee: "$0",
    overdraft: "Up to $2,500",
    rating: 4.7,
    users: "500K+",
    icon: Star,
    description: "Designed specifically for students with interest-free overdrafts and exclusive student benefits.",
    features: [
      "No monthly fees while studying",
      "Interest-free overdraft",
      "Student railcard discount",
      "Graduation gift of $100",
      "Mobile banking app",
      "Budgeting tools",
      "24/7 customer support",
      "Easy account switching"
    ],
    benefits: [
      "Interest-free overdraft",
      "Student perks",
      "Graduation bonus",
      "No fees"
    ],
    highlight: "Designed specifically for students"
  }
];

export const whyChooseUsData = [
  {
    icon: Shield,
    title: "FSCS Protected",
    description: "Your money is protected up to $85,000 by the Financial Services."
  },
  {
    icon: Users,
    title: "Award-Winning App",
    description: "Rated 4.8/5 stars with over 2 million downloads. Banking made simple."
  },
  {
    icon: CreditCard,
    title: "24/7 Support",
    description: "Round-the-clock customer service via phone, chat, or in-app messaging"
  },
  {
    icon: Star,
    title: "Smart Features",
    description: "AI-powered budgeting, spending insights, and financial health tracking"
  }
];

export const accountPhilosophy = [
  {
    id: 'simplicity',
    title: 'Simple Banking',
    description: 'Banking should be straightforward, transparent, and work seamlessly in your daily life.'
  },
  {
    id: 'innovation',
    title: 'Digital Innovation',
    description: 'Leveraging cutting-edge technology to make banking faster, smarter, and more intuitive.'
  },
  {
    id: 'customer-first',
    title: 'Customer First',
    description: 'Every feature and service is designed with our customers\' needs and convenience in mind.'
  }
];
