import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: securityHeaders,
    },
  ],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "myeasterntype.com",
          },
        ],
        destination: "https://www.myeasterntype.com/:path*",
        permanent: true,
      },
      {
        source: "/wellness/why-am-i-always-tired",
        destination: "/symptoms/why-am-i-always-tired",
        permanent: true,
      },
      {
        source: "/wellness/cold-hands-and-feet",
        destination: "/symptoms/why-am-i-always-cold",
        permanent: true,
      },
      {
        source: "/wellness/night-sweats-chinese-medicine",
        destination: "/symptoms/why-do-i-have-night-sweats",
        permanent: true,
      },
      {
        source: "/wellness/bloating-chinese-medicine",
        destination: "/symptoms/always-bloated-after-eating",
        permanent: true,
      },
      {
        source: "/wellness/acne-chinese-medicine",
        destination: "/symptoms/why-do-i-keep-breaking-out",
        permanent: true,
      },
      {
        source: "/wellness/anxiety-chinese-medicine",
        destination: "/symptoms/why-do-i-feel-anxious",
        permanent: true,
      },
      {
        source: "/wellness/insomnia-chinese-medicine",
        destination: "/symptoms/why-cant-i-fall-asleep",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
