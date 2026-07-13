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
      {
        source: "/solutions/chinese-medicine-for-constipation",
        destination: "/wellness/chinese-medicine-for-constipation",
        permanent: true,
      },
      {
        source: "/herbs/gan-cao-gan-cao",
        destination: "/herbs/gan-cao",
        permanent: true,
      },
      {
        source: "/herbs/huang-jing-huang-jing",
        destination: "/herbs/huang-jing",
        permanent: true,
      },
      {
        source: "/herbs/mai-dong-mai-dong",
        destination: "/herbs/mai-dong",
        permanent: true,
      },
      {
        source: "/herbs/yu-zhu-yu-zhu",
        destination: "/herbs/yu-zhu",
        permanent: true,
      },
      {
        source: "/herbs/shi-hu-shi-hu",
        destination: "/herbs/shi-hu",
        permanent: true,
      },
      {
        source: "/herbs/tian-ma-tian-ma",
        destination: "/herbs/tian-ma",
        permanent: true,
      },
      {
        source: "/herbs/he-shou-wu-he-shou-wu",
        destination: "/herbs/he-shou-wu",
        permanent: true,
      },
      {
        source: "/herbs/du-zhong-du-zhong",
        destination: "/herbs/du-zhong",
        permanent: true,
      },
      {
        source: "/herbs/rou-cong-rong-rou-cong-rong",
        destination: "/herbs/rou-cong-rong",
        permanent: true,
      },
      {
        source: "/herbs/yin-yang-huo-yin-yang-huo",
        destination: "/herbs/yin-yang-huo",
        permanent: true,
      },
      {
        source: "/herbs/ba-ji-tian-ba-ji-tian",
        destination: "/herbs/ba-ji-tian",
        permanent: true,
      },
      {
        source: "/herbs/xuan-shen-xuan-shen",
        destination: "/herbs/xuan-shen",
        permanent: true,
      },
      {
        source: "/herbs/dang-shen-dang-shen",
        destination: "/herbs/dang-shen",
        permanent: true,
      },
      {
        source: "/herbs/bai-zhu-bai-zhu",
        destination: "/herbs/bai-zhu",
        permanent: true,
      },
      {
        source: "/herbs/bai-shao-bai-shao",
        destination: "/herbs/bai-shao",
        permanent: true,
      },
      {
        source: "/herbs/shu-di-huang-shu-di-huang",
        destination: "/herbs/shu-di-huang",
        permanent: true,
      },
      {
        source: "/herbs/e-jiao-e-jiao",
        destination: "/herbs/e-jiao",
        permanent: true,
      },
      {
        source: "/herbs/ling-zhi-ling-zhi",
        destination: "/herbs/ling-zhi",
        permanent: true,
      },
      {
        source: "/herbs/sang-ye-sang-ye",
        destination: "/herbs/sang-ye",
        permanent: true,
      },
      {
        source: "/herbs/jue-ming-zi-jue-ming-zi",
        destination: "/herbs/jue-ming-zi",
        permanent: true,
      },
      {
        source: "/herbs/ban-lan-gen-ban-lan-gen",
        destination: "/herbs/ban-lan-gen",
        permanent: true,
      },
      {
        source: "/herbs/lian-qiao-lian-qiao",
        destination: "/herbs/lian-qiao",
        permanent: true,
      },
      {
        source: "/herbs/zhi-mu-zhi-mu",
        destination: "/herbs/zhi-mu",
        permanent: true,
      },
      {
        source: "/herbs/che-qian-zi-che-qian-zi",
        destination: "/herbs/che-qian-zi",
        permanent: true,
      },
      {
        source: "/herbs/di-gu-pi-di-gu-pi",
        destination: "/herbs/di-gu-pi",
        permanent: true,
      },
      {
        source: "/herbs/shan-zha-shan-zha",
        destination: "/herbs/shan-zha",
        permanent: true,
      },
      {
        source: "/herbs/suan-zao-ren-suan-zao-ren",
        destination: "/herbs/suan-zao-ren",
        permanent: true,
      },
      {
        source: "/herbs/wu-wei-zi-wu-wei-zi",
        destination: "/herbs/wu-wei-zi",
        permanent: true,
      },
      {
        source: "/herbs/ze-xie-ze-xie",
        destination: "/herbs/ze-xie",
        permanent: true,
      },
      {
        source: "/herbs/zhu-ling-zhu-ling",
        destination: "/herbs/zhu-ling",
        permanent: true,
      },
      {
        source: "/herbs/chai-hu-chai-hu",
        destination: "/herbs/chai-hu",
        permanent: true,
      },
      {
        source: "/herbs/dan-shen-dan-shen",
        destination: "/herbs/dan-shen",
        permanent: true,
      },
      {
        source: "/herbs/hua-qi-shen-hua-qi-shen",
        destination: "/herbs/hua-qi-shen",
        permanent: true,
      },
      {
        source: "/herbs/ge-gen-ge-gen",
        destination: "/herbs/ge-gen",
        permanent: true,
      },
      {
        source: "/herbs/gan-jiang-gan-jiang",
        destination: "/herbs/gan-jiang",
        permanent: true,
      },
      {
        source: "/herbs/gao-liang-jiang-gao-liang-jiang",
        destination: "/herbs/gao-liang-jiang",
        permanent: true,
      },
      {
        source: "/herbs/sha-shen-sha-shen",
        destination: "/herbs/sha-shen",
        permanent: true,
      },
      {
        source: "/herbs/tian-dong-tian-dong",
        destination: "/herbs/tian-dong",
        permanent: true,
      },
      {
        source: "/herbs/shan-zhu-yu-shan-zhu-yu",
        destination: "/herbs/shan-zhu-yu",
        permanent: true,
      },
      {
        source: "/herbs/sha-ji-sha-ji",
        destination: "/herbs/sha-ji",
        permanent: true,
      },
      {
        source: "/herbs/hong-jing-tian-hong-jing-tian",
        destination: "/herbs/hong-jing-tian",
        permanent: true,
      },
      {
        source: "/herbs/wu-jia-pi-wu-jia-pi",
        destination: "/herbs/wu-jia-pi",
        permanent: true,
      },
      {
        source: "/herbs/tao-jiao-tao-jiao",
        destination: "/herbs/tao-jiao",
        permanent: true,
      },
      {
        source: "/herbs/mu-er-mu-er",
        destination: "/herbs/mu-er",
        permanent: true,
      },
      {
        source: "/herbs/wu-hua-guo-wu-hua-guo",
        destination: "/herbs/wu-hua-guo",
        permanent: true,
      },
      {
        source: "/herbs/luo-han-guo-luo-han-guo",
        destination: "/herbs/luo-han-guo",
        permanent: true,
      },
      {
        source: "/herbs/huang-bo-huang-bo",
        destination: "/herbs/huang-bo",
        permanent: true,
      },
      {
        source: "/herbs/huang-zhi-zi-huang-zhi-zi",
        destination: "/herbs/huang-zhi-zi",
        permanent: true,
      },
      {
        source: "/herbs/xia-ku-cao-xia-ku-cao",
        destination: "/herbs/xia-ku-cao",
        permanent: true,
      },
      {
        source: "/herbs/yin-chen-yin-chen",
        destination: "/herbs/yin-chen",
        permanent: true,
      },
      {
        source: "/herbs/da-qing-ye-da-qing-ye",
        destination: "/herbs/da-qing-ye",
        permanent: true,
      },
      {
        source: "/herbs/zhe-er-gen-zhe-er-gen",
        destination: "/herbs/zhe-er-gen",
        permanent: true,
      },
      {
        source: "/herbs/ma-chi-xian-ma-chi-xian",
        destination: "/herbs/ma-chi-xian",
        permanent: true,
      },
      {
        source: "/herbs/lu-hui-lu-hui",
        destination: "/herbs/lu-hui",
        permanent: true,
      },
      {
        source: "/herbs/chuan-bei-chuan-bei",
        destination: "/herbs/chuan-bei",
        permanent: true,
      },
      {
        source: "/herbs/xing-ren-xing-ren",
        destination: "/herbs/xing-ren",
        permanent: true,
      },
      {
        source: "/herbs/gua-lou-gua-lou",
        destination: "/herbs/gua-lou",
        permanent: true,
      },
      {
        source: "/herbs/zhu-ye-zhu-ye",
        destination: "/herbs/zhu-ye",
        permanent: true,
      },
      {
        source: "/herbs/ban-xia-ban-xia",
        destination: "/herbs/ban-xia",
        permanent: true,
      },
      {
        source: "/herbs/qian-hu-qian-hu",
        destination: "/herbs/qian-hu",
        permanent: true,
      },
      {
        source: "/herbs/sheng-ma-sheng-ma",
        destination: "/herbs/sheng-ma",
        permanent: true,
      },
      {
        source: "/herbs/mu-hu-die-mu-hu-die",
        destination: "/herbs/mu-hu-die",
        permanent: true,
      },
      {
        source: "/herbs/bai-guo-ren-bai-guo-ren",
        destination: "/herbs/bai-guo-ren",
        permanent: true,
      },
      {
        source: "/herbs/hua-jiao-hua-jiao",
        destination: "/herbs/hua-jiao",
        permanent: true,
      },
      {
        source: "/herbs/mu-ding-xiang-mu-ding-xiang",
        destination: "/herbs/mu-ding-xiang",
        permanent: true,
      },
      {
        source: "/herbs/ji-nei-jin-ji-nei-jin",
        destination: "/herbs/ji-nei-jin",
        permanent: true,
      },
      {
        source: "/herbs/zhi-shi-zhi-shi",
        destination: "/herbs/zhi-shi",
        permanent: true,
      },
      {
        source: "/herbs/san-qi-san-qi",
        destination: "/herbs/san-qi",
        permanent: true,
      },
      {
        source: "/herbs/yi-mu-cao-yi-mu-cao",
        destination: "/herbs/yi-mu-cao",
        permanent: true,
      },
      {
        source: "/herbs/gui-hua-gui-hua",
        destination: "/herbs/gui-hua",
        permanent: true,
      },
      {
        source: "/herbs/he-ye-cha-he-ye-cha",
        destination: "/herbs/he-ye-cha",
        permanent: true,
      },
      {
        source: "/herbs/tan-xiang-tan-xiang",
        destination: "/herbs/tan-xiang",
        permanent: true,
      },
      {
        source: "/herbs/cang-er-zi-cang-er-zi",
        destination: "/herbs/cang-er-zi",
        permanent: true,
      },
      {
        source: "/herbs/sang-zhi-sang-zhi",
        destination: "/herbs/sang-zhi",
        permanent: true,
      },
      {
        source: "/herbs/zi-su-zi-su",
        destination: "/herbs/zi-su",
        permanent: true,
      },
      {
        source: "/herbs/guang-chen-pi-guang-chen-pi",
        destination: "/herbs/guang-chen-pi",
        permanent: true,
      },
      {
        source: "/herbs/ren-shen-pian-hong-shen-pian",
        destination: "/herbs/hong-shen-pian",
        permanent: true,
      },
      {
        source: "/herbs/huo-xiang-guang-huo-xiang",
        destination: "/herbs/guang-huo-xiang",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
