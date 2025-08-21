import { CheckCircle, Shield, FileText, AlertCircle } from 'lucide-react';

export const termsSection = [
  {
    id: 'acceptance',
    icon: CheckCircle,
    title: 'Acceptance of Terms',
    content: 'By accessing and using Prime Bank Connect services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These terms apply to all users of our banking services, including personal and business customers.'
  },
  {
    id: 'services',
    icon: Shield,
    title: 'Banking Services',
    content: 'Prime Bank Connect provides various financial services including personal banking, business banking, loans, mortgages, and investment services. All services are subject to eligibility criteria, credit checks, and regulatory compliance requirements.'
  },
  {
    id: 'account-usage',
    icon: FileText,
    title: 'Account Usage',
    content: 'You agree to use your Prime Bank Connect accounts only for lawful purposes. You must maintain accurate account information, protect your login credentials, and promptly report any unauthorized transactions or suspicious activities.'
  },
  {
    id: 'fees',
    icon: AlertCircle,
    title: 'Fees and Charges',
    content: 'Applicable fees and charges are outlined in our Fee Schedule, which may be updated from time to time. You will be notified of any changes to fees in accordance with regulatory requirements and our notification policies.'
  }
];

export const importantNotices = [
  'These terms are governed by the laws of the United Kingdom and Kenya',
  'Prime Bank Connect is authorized and regulated by relevant financial authorities',
  'Deposits are protected under applicable deposit guarantee schemes',
  'We reserve the right to modify these terms with appropriate notice'
];
