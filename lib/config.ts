export const config = {
  isProduction: process.env.NEXT_PUBLIC_ENV === 'prod',
  indexerUrl: process.env.NEXT_PUBLIC_INDEXER_URL || 'https://api.hemera.dev',
} as const; 