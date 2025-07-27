import { Building2, TrendingUp, Shield, Globe, Zap, Clock, Users, Calculator, PiggyBank } from "lucide-react";

export const businessAccounts = [
  {
    id: 'starter-business',
    name: 'Starter Business Account',
    description: 'Perfect for new businesses and sole traders getting started',
    icon: Building2,
    monthlyFee: 'Free',
    transactions: '100 free/month',
    features: 'Basic banking',
    benefits: ['Free debit card', 'Online banking', 'Mobile app', 'Direct debits', 'Standing orders']
  },
  {
    id: 'growth-business',
    name: 'Growth Business Account',
    description: 'Designed for growing businesses with increased transaction needs',
    icon: TrendingUp,
    monthlyFee: '$15/month',
    transactions: '500 free/month',
    features: 'Enhanced tools',
    benefits: ['Multi-user access', 'Advanced reporting', 'Expense management', 'Invoice creation', 'Payment processing']
  },
  {
    id: 'premium-business',
    name: 'Premium Business Account',
    description: 'Comprehensive solution for established businesses with complex needs',
    icon: Shield,
    monthlyFee: '$35/month',
    transactions: 'Unlimited',
    features: 'Full suite',
    benefits: ['Dedicated relationship manager', 'Priority support', 'International payments', 'Treasury services', 'Credit facilities']
  },
  {
    id: 'enterprise-business',
    name: 'Enterprise Business Account',
    description: 'Tailored solutions for large corporations and enterprises',
    icon: Globe,
    monthlyFee: 'Custom pricing',
    transactions: 'Unlimited',
    features: 'Enterprise grade',
    benefits: ['Custom integrations', 'API access', 'White-label solutions', 'Advanced security', 'Dedicated team']
  }
];

export const accountBenefits = [
  {
    id: 'instant-setup',
    title: 'Instant Account Opening',
    description: 'Open your business account in minutes with our streamlined digital process',
    icon: Zap
  },
  {
    id: 'secure-banking',
    title: 'Bank-Grade Security',
    description: 'Your funds are protected with advanced encryption and fraud monitoring',
    icon: Shield
  },
  {
    id: '247-access',
    title: '24/7 Banking Access',
    description: 'Manage your business finances anytime, anywhere with our mobile and web platforms',
    icon: Clock
  },
  {
    id: 'team-management',
    title: 'Team Management',
    description: 'Add team members with customizable permissions and spending controls',
    icon: Users
  },
  {
    id: 'expense-tracking',
    title: 'Smart Expense Tracking',
    description: 'Automatically categorize transactions and generate detailed expense reports',
    icon: Calculator
  },
  {
    id: 'business-tools',
    title: 'Integrated Business Tools',
    description: 'Access invoicing, payroll, and accounting integrations in one platform',
    icon: PiggyBank
  }
];

export const businessPhilosophy = [
  {
    id: 'transparency',
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise charges. What you see is what you pay, with clear pricing for all services.'
  },
  {
    id: 'innovation',
    title: 'Innovation First',
    description: 'Cutting-edge banking technology that evolves with your business needs and industry trends.'
  },
  {
    id: 'support',
    title: 'Dedicated Support',
    description: 'Expert business banking specialists available when you need them most, not just during business hours.'
  }
];
