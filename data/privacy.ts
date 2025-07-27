import { Database, Settings, Users, Lock, Shield, Eye } from 'lucide-react';

export const privacySections = [
    {
      id: 'data-collection',
      icon: Database,
      title: 'Data Collection',
      content: 'We collect personal information necessary to provide banking services, including identification details, financial information, transaction data, and device information. All data collection complies with GDPR, UK Data Protection Act, and Kenyan Data Protection Act.'
    },
    {
      id: 'data-usage',
      icon: Settings,
      title: 'How We Use Your Data',
      content: 'Your personal data is used to provide banking services, process transactions, comply with legal obligations, prevent fraud, improve our services, and communicate with you about your accounts and relevant products.'
    },
    {
      id: 'data-sharing',
      icon: Users,
      title: 'Data Sharing',
      content: 'We may share your data with authorized third parties including regulatory authorities, credit reference agencies, service providers, and other financial institutions as required for banking operations and legal compliance.'
    },
    {
      id: 'data-security',
      icon: Lock,
      title: 'Data Security',
      content: 'We implement robust security measures including encryption, secure servers, access controls, and regular security audits to protect your personal data from unauthorized access, disclosure, or misuse.'
    },
    {
      id: 'your-rights',
      icon: Shield,
      title: 'Your Rights',
      content: 'You have the right to access, correct, delete, or restrict processing of your personal data. You can also object to processing, request data portability, and withdraw consent where applicable under data protection laws.'
    },
    {
      id: 'data-retention',
      icon: Eye,
      title: 'Data Retention',
      content: 'We retain your personal data only as long as necessary for the purposes collected, to comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods vary by data type and legal requirements.'
    }
  ];

  export const dataTypes = [
    'Personal identification information (name, address, date of birth)',
    'Financial information (income, assets, credit history)',
    'Transaction data and account activity',
    'Device and usage information when accessing our services',
    'Communication records and customer service interactions',
    'Marketing preferences and communication history'
  ];

  export const yourRights = [
    'Right to access your personal data',
    'Right to correct inaccurate information',
    'Right to delete your data (where legally permissible)',
    'Right to restrict or object to processing',
    'Right to data portability',
    'Right to withdraw consent'
  ];