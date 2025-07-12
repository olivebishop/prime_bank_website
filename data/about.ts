// @/data/about.js
import { Target, Heart, Globe, Shield, Users, Award, TrendingUp, Clock, MapPin, Phone, Mail, Linkedin } from 'lucide-react';

export const companyValues = [
  {
    id: 'trust',
    title: 'Trust & Transparency',
    description: 'We build lasting relationships through honest communication, clear processes, and unwavering commitment to our customers.',
    icon: Shield
  },
  {
    id: 'innovation',
    title: 'Innovation First',
    description: 'Leveraging cutting-edge technology to make banking simple, accessible, and efficient for the modern world.',
    icon: TrendingUp
  },
  {
    id: 'community',
    title: 'Community Impact',
    description: 'Supporting local communities and businesses with tailored financial solutions that drive economic growth.',
    icon: Heart
  },
  {
    id: 'excellence',
    title: 'Excellence in Service',
    description: 'Delivering exceptional customer experiences through personalized service and expert financial guidance.',
    icon: Award
  }
];

export const companyStats = [
  {
    id: 'customers',
    value: '2.5M+',
    label: 'Happy Customers',
    description: 'Trusted by millions across the UK and Africa'
  },
  {
    id: 'branches',
    value: '150+',
    label: 'Branches',
    description: 'Physical presence across major cities'
  },
  {
    id: 'assets',
    value: '£12B+',
    label: 'Assets Under Management',
    description: 'Managing wealth for our customers'
  },
  {
    id: 'awards',
    value: '25+',
    label: 'Industry Awards',
    description: 'Recognition for excellence and innovation'
  }
];

export const leadership = [
  {
    id: 'ceo',
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    bio: 'With over 20 years in financial services, Sarah leads our vision of making banking accessible to everyone.',
    image: '/api/placeholder/300/300',
    linkedin: '#'
  },
  {
    id: 'cto',
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'Former tech executive from Silicon Valley, Michael drives our digital transformation and innovation strategy.',
    image: '/api/placeholder/300/300',
    linkedin: '#'
  },
  {
    id: 'cfo',
    name: 'David Okafor',
    role: 'Chief Financial Officer',
    bio: 'A chartered accountant with deep expertise in African markets, David ensures our financial strength.',
    image: '/api/placeholder/300/300',
    linkedin: '#'
  },
  {
    id: 'coo',
    name: 'Emily Rodriguez',
    role: 'Chief Operating Officer',
    bio: 'Emily oversees our daily operations and customer experience across all our service channels.',
    image: '/api/placeholder/300/300',
    linkedin: '#'
  }
];

export const milestones = [
  {
    id: 'founded',
    year: '2015',
    title: 'Prime Bank Founded',
    description: 'Started with a vision to bridge African and British financial markets'
  },
  {
    id: 'first-million',
    year: '2018',
    title: 'First Million Customers',
    description: 'Reached our first major milestone with 1 million happy customers'
  },
  {
    id: 'digital-launch',
    year: '2020',
    title: 'Digital Banking Launch',
    description: 'Launched our award-winning mobile and online banking platform'
  },
  {
    id: 'expansion',
    year: '2022',
    title: 'International Expansion',
    description: 'Expanded services to 15 countries across Africa and Europe'
  },
  {
    id: 'sustainability',
    year: '2024',
    title: 'Net Zero Commitment',
    description: 'Committed to achieving net zero carbon emissions by 2030'
  }
];

export const officeLocations = [
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    address: '123 Canary Wharf, London E14 5AB',
    phone: '+44 20 7123 4567',
    email: 'london@primebank.com',
    isHeadquarters: true
  },
  {
    id: 'nairobi',
    city: 'Nairobi',
    country: 'Kenya',
    address: '456 Westlands Road, Nairobi 00100',
    phone: '+254 20 123 4567',
    email: 'nairobi@primebank.com',
    isHeadquarters: false
  },
  {
    id: 'lagos',
    city: 'Lagos',
    country: 'Nigeria',
    address: '789 Victoria Island, Lagos 101241',
    phone: '+234 1 234 5678',
    email: 'lagos@primebank.com',
    isHeadquarters: false
  }
];