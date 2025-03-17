// Additional type declarations for Next.js
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    NEXT_PUBLIC_VERCEL_URL?: string
  }
}

// Override Next.js PageProps type to allow both Promise and non-Promise params
declare module 'next' {
  interface PageProps {
    params?: any
  }
}