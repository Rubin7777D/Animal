import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  experimental: { cpus: 1 },
  async headers() { return [{source: '/:path*', headers: [
    {key:'X-Content-Type-Options',value:'nosniff'},
    {key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},
    {key:'X-Frame-Options',value:'DENY'},
    {key:'Permissions-Policy',value:'camera=(self), microphone=(self)'},
    {key:'Content-Security-Policy',value:"object-src 'none'; base-uri 'self'; frame-embedding 'none'; frame-ancestors 'none'"}
  ]}]; }
};
export default config;
