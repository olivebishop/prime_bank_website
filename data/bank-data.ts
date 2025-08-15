// lib/banks-data.ts

export interface Bank {
  id: number
  name: string
  fullName: string
  logo: string
  description: string
  color?: string
}

export const banks: Bank[] = [
  { 
    id: 1, 
    name: 'KCB', 
    fullName: 'Kenya Commercial Bank',
    logo: '/images/kcb.jpeg',
    description: 'Kenya\'s largest bank by assets',
    color: 'bg-blue-600'
  },
  { 
    id: 2, 
    name: 'Equity', 
    fullName: 'Equity Bank',
    logo: '/images/equity.png',
    description: 'Leading financial services provider',
    color: 'bg-red-600'
  },
  { 
    id: 3, 
    name: 'Stanbic Bank', 
    fullName: 'Stanbic Bank Kenya',
    logo: '/images/stanbic.jpeg',
    description: 'Part of Standard Bank Group',
    color: 'bg-blue-800'
  },
  { 
    id: 4, 
    name: 'Cooperative Bank', 
    fullName: 'Co-operative Bank of Kenya',
    logo: '/images/cooperative.jpeg',
    description: 'Customer-owned financial institution',
    color: 'bg-green-600'
  },
  { 
    id: 5, 
    name: 'NCBA', 
    fullName: 'NCBA Bank Kenya',
    logo: '/images/ncba.png',
    description: 'Innovative banking solutions',
    color: 'bg-purple-600'
  },
  { 
    id: 6, 
    name: 'I&M Bank', 
    fullName: 'I&M Bank Limited',
    logo: '/images/im.jpeg',
    description: 'Regional banking expertise',
    color: 'bg-orange-600'
  }
]