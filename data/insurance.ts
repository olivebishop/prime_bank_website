// @/data/insurance.js
import { Shield, Heart, Home, Car, Briefcase, Users, Clock, Phone, Star, Award } from 'lucide-react';

export const insuranceProducts = [
  {
    id: 'life-insurance',
    name: 'Life Insurance',
    description: 'Protect your family\'s financial future with comprehensive life coverage that provides peace of mind and security.',
    icon: Heart,
    coverage: 'Up to £2M',
    premium: 'From £15/mo',
    access: 'Instant Quote'
  },
  {
    id: 'home-insurance',
    name: 'Home Insurance',
    description: 'Comprehensive protection for your home and belongings against damage, theft, and natural disasters.',
    icon: Home,
    coverage: 'Full Rebuild',
    premium: 'From £8/mo',
    access: '24/7 Claims'
  },
  {
    id: 'car-insurance',
    name: 'Car Insurance',
    description: 'Get on the road with confidence. Comprehensive motor insurance with competitive rates and excellent service.',
    icon: Car,
    coverage: 'Comprehensive',
    premium: 'From £25/mo',
    access: 'Instant Policy'
  },
  {
    id: 'travel-insurance',
    name: 'Travel Insurance',
    description: 'Travel worry-free with worldwide coverage for medical emergencies, trip cancellations, and lost luggage.',
    icon: Shield,
    coverage: 'Worldwide',
    premium: 'From £12/trip',
    access: 'Same Day'
  },
  {
    id: 'business-insurance',
    name: 'Business Insurance',
    description: 'Protect your business with tailored coverage for liability, property, and professional indemnity.',
    icon: Briefcase,
    coverage: 'Customized',
    premium: 'From £45/mo',
    access: 'Expert Advice'
  },
  {
    id: 'health-insurance',
    name: 'Health Insurance',
    description: 'Private healthcare coverage with access to leading hospitals and specialists across the UK.',
    icon: Users,
    coverage: 'Private Care',
    premium: 'From £85/mo',
    access: 'Direct Billing'
  }
];

export const insuranceBenefits = [
  {
    id: 'instant-claims',
    title: 'Lightning Fast Claims',
    description: 'Process most claims within 24 hours with our AI-powered assessment system and dedicated claims team.',
    icon: Clock
  },
  {
    id: 'expert-support',
    title: '24/7 Expert Support',
    description: 'Our insurance specialists are available round the clock to help you with queries, claims, and policy changes.',
    icon: Phone
  },
  {
    id: 'competitive-rates',
    title: 'Competitive Rates',
    description: 'Get the best value for your money with our competitive premiums and comprehensive coverage options.',
    icon: Star
  },
  {
    id: 'award-winning',
    title: 'Award-Winning Service',
    description: 'Recognized for excellence in customer service and claims handling by leading industry bodies.',
    icon: Award
  }
];

export const insurancePhilosophy = [
  {
    id: 'customer-first',
    title: 'Customer-First Approach',
    description: 'We put our customers at the heart of everything we do, ensuring fair treatment and transparent processes throughout your insurance journey.'
  },
  {
    id: 'innovation-driven',
    title: 'Innovation Driven',
    description: 'Leveraging cutting-edge technology to make insurance simple, accessible, and efficient for the modern world.'
  },
  {
    id: 'community-focused',
    title: 'Community Focused',
    description: 'Supporting local communities and businesses with tailored insurance solutions that understand regional needs and challenges.'
  }
];