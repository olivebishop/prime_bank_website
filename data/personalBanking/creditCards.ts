import { CreditCard, Shield, Star, Gift } from 'lucide-react';

export interface CreditCardProduct {
  id: string;
  name: string;
  type: string;
  description: string;
  cashback: string;
  apr: string;
  introRate: string;
  annualFee: string;
  icon: any;
  features: string[];
}

export const creditCards: CreditCardProduct[] = [
  {
    id: 'prime-cashback',
    name: "Prime Cashback Card",
    type: "Cashback Rewards",
    description: "Earn money back on every purchase with our most popular cashback card featuring competitive rates and no annual fee.",
    cashback: "1.5%",
    apr: "22.9%",
    introRate: "0% for 12 months",
    annualFee: "£0",
    icon: CreditCard,
    features: [
      "1.5% cashback on all purchases",
      "0% APR for first 12 months",
      "No annual fee ever",
      "Contactless payments",
      "Fraud protection guarantee",
      "Instant purchase notifications"
    ]
  },
  {
    id: 'prime-travel',
    name: "Prime Travel Card",
    type: "Travel Rewards",
    description: "Perfect for frequent travelers with no foreign fees, travel insurance, and reward points on every purchase.",
    cashback: "2 points per £1",
    apr: "24.9%",
    introRate: "0% foreign fees",
    annualFee: "£0",
    icon: Gift,
    features: [
      "2 reward points per £1 spent",
      "0% foreign transaction fees",
      "Comprehensive travel insurance",
      "Priority airport lounge access",
      "24/7 worldwide support",
      "Purchase protection insurance"
    ]
  },
  {
    id: 'prime-balance',
    name: "Prime Balance Transfer",
    type: "Balance Transfer",
    description: "Consolidate and save on existing debt with our longest 0% balance transfer period and competitive ongoing rates.",
    cashback: "0% transfers",
    apr: "19.9%",
    introRate: "0% for 24 months",
    annualFee: "£0",
    icon: Shield,
    features: [
      "0% on balance transfers for 24 months",
      "3% balance transfer fee",
      "Competitive ongoing rate",
      "Online balance transfer tool",
      "Credit score monitoring",
      "Flexible repayment options"
    ]
  },
  {
    id: 'prime-premium',
    name: "Prime Premium Card",
    type: "Premium Rewards",
    description: "Maximum rewards for high spenders with premium cashback rates, welcome bonus, and exclusive benefits.",
    cashback: "Up to 3%",
    apr: "26.9%",
    introRate: "£200 bonus",
    annualFee: "£195",
    icon: Star,
    features: [
      "3% cashback on dining & entertainment",
      "2% on groceries & fuel",
      "£200 welcome bonus",
      "Concierge service",
      "Exclusive event access",
      "Priority customer service"
    ]
  }
];