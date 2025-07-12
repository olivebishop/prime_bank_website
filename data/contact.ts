import { Phone, Mail, MapPin, MessageCircle, Headphones } from 'lucide-react';

export const contactInfo = [
  {
    id: 1,
    icon: Phone,
    title: 'Phone',
    primary: '+44 20 7123 4567',
    secondary: '+254 20 123 4567'
  },
  {
    id: 2,
    icon: Mail,
    title: 'Email',
    primary: 'support@primeobank.com',
    secondary: 'info@primeobank.com'
  },
  {
    id: 3,
    icon: MapPin,
    title: 'London Office',
    primary: '25 Canary Wharf',
    secondary: 'London E14 5AB, UK'
  },
  {
    id: 4,
    icon: MapPin,
    title: 'Nairobi Office',
    primary: 'Westlands Square',
    secondary: 'Nairobi, Kenya'
  }
];

export const supportChannels = [
  {
    id: 1,
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team'
  },
  {
    id: 2,
    icon: Headphones,
    title: 'Phone Support',
    description: 'Speak directly with our specialists'
  },
  {
    id: 3,
    icon: Mail,
    title: 'Email Support',
    description: 'Send us your questions and concerns'
  }
];

export const businessHours = [
  {
    location: 'London Office',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM GMT'
  },
  {
    location: 'Nairobi Office',
    hours: 'Monday - Friday: 8:00 AM - 5:00 PM EAT'
  },
  {
    location: 'Emergency Support',
    hours: 'Available 24/7 for urgent matters'
  }
];

export const subjectOptions = [
  { value: '', label: 'Select a subject' },
  { value: 'account', label: 'Account Support' },
  { value: 'loans', label: 'Loan Inquiries' },
  { value: 'cards', label: 'Card Services' },
  { value: 'investments', label: 'Investment Services' },
  { value: 'business', label: 'Business Banking' },
  { value: 'other', label: 'Other' }
];