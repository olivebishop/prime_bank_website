import { Shield, Settings, BarChart3, Target, Globe } from 'lucide-react';

export const cookieCategories = [
    {
      id: 'essential',
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Necessary for the website to function properly and cannot be disabled.',
      purpose: 'Enable core functionality like security, network management, and accessibility.',
      examples: 'Session cookies, authentication tokens, security cookies',
      retention: 'Session or up to 1 year',
      canDisable: false
    },
    {
      id: 'functional',
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Enhance functionality and personalization but are not essential.',
      purpose: 'Remember your preferences, language settings, and improve user experience.',
      examples: 'Language preferences, accessibility settings, form data',
      retention: 'Up to 2 years',
      canDisable: true
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website.',
      purpose: 'Collect information about website usage, performance, and user behavior.',
      examples: 'Google Analytics, page views, session duration, bounce rate',
      retention: 'Up to 2 years',
      canDisable: true
    },
    {
      id: 'marketing',
      icon: Target,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track campaign effectiveness.',
      purpose: 'Show personalized ads, measure ad performance, and build marketing profiles.',
      examples: 'Ad targeting, conversion tracking, social media pixels',
      retention: 'Up to 2 years',
      canDisable: true
    }
  ];

  export const cookieTypes = [
    {
      type: 'Session Cookies',
      description: 'Temporary cookies that expire when you close your browser',
      icon: Globe
    },
    {
      type: 'Persistent Cookies',
      description: 'Remain on your device until they expire or you delete them',
      icon: Settings
    },
    {
      type: 'First-Party Cookies',
      description: 'Set directly by Prime Bank Connect on our website',
      icon: Shield
    },
    {
      type: 'Third-Party Cookies',
      description: 'Set by external services we use on our website',
      icon: Target
    }
  ];

  export const managementOptions = [
    'Adjust cookie preferences in our cookie banner',
    'Use browser settings to block or delete cookies',
    'Opt out of specific third-party tracking services',
    'Contact us to exercise your privacy rights'
  ];