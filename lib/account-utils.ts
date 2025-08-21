export const ACCOUNT_FORMATS = {
  UK: {
    length: 8,
    format: 'NNNNNNNN',
    sortCodeRequired: true,
    prefix: 'PBC', // Prime Bank prefix
    currency: 'USD'
  },
  KENYA: {
    length: 12,
    format: 'CCNNNNNNNNNN', // CC = bank code, N = numbers
    prefix: 'KB', // Kenya Bank prefix
    currency: 'KES'
  }
} as const;

export function generateAccountNumber(country: 'UK' | 'KENYA'): string {
  const format = ACCOUNT_FORMATS[country];
  
  if (country === 'UK') {
    // UK format: PB + 8 digits
    const randomDigits = Math.floor(10000000 + Math.random() * 90000000);
    return `${format.prefix}${randomDigits}`;
  } else {
    // Kenya format: KB + 2 digit bank code + 10 digits
    const bankCode = '01'; // Prime Bank Kenya code
    const randomDigits = Math.floor(1000000000 + Math.random() * 9000000000);
    return `${format.prefix}${bankCode}${randomDigits}`;
  }
}

export function validateAccountNumber(accountNumber: string, country: 'UK' | 'KENYA'): boolean {
  if (country === 'UK') {
    return /^PB\d{8}$/.test(accountNumber);
  } else {
    return /^KB\d{12}$/.test(accountNumber);
  }
}

export function formatCurrency(amount: number, currency: 'GBP' | 'KES'): string {
  const formatter = new Intl.NumberFormat(currency === 'GBP' ? 'en-GB' : 'en-KE', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
  });
  
  return formatter.format(amount);
}

export function getSortCode(country: 'UK' | 'KENYA'): string {
  if (country === 'UK') {
    return '20-14-53'; // Prime Bank UK sort code
  }
  return ''; // Kenya doesn't use sort codes
}