/**
 * 网站配置文件
 * Site Configuration File
 *
 * 这个文件包含所有网站配置，可以轻松编辑和维护
 * This file contains all site configuration for easy editing and maintenance
 */

export type NavigationItem = {
  name: string;
  href: string;
};

export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  badge: string;
  buttonText: string;
  buttonLink: string;
  features: string[];
};

export const siteConfig = {
  site: {
    name: process.env.NEXT_PUBLIC_SITE_NAME || "推推",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.xrista.net",
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "军用级加密技术，畅享无界网络世界",
  },
  links: {
    download: process.env.NEXT_PUBLIC_DOWNLOAD_URL || "https://user.xrista.net",
    demo: process.env.NEXT_PUBLIC_DEMO_URL || "https://user.xrista.net",
    login: process.env.NEXT_PUBLIC_LOGIN_URL || "https://user.xrista.net",
    signup: process.env.NEXT_PUBLIC_SIGNUP_URL || "https://user.xrista.net",
    pricing: "https://user.xrista.net",
    contact: "https://user.xrista.net",
    support: "https://user.xrista.net",
    blog: "https://user.xrista.net",
    privacy: "https://user.xrista.net",
    terms: "https://user.xrista.net",
    security: "https://user.xrista.net",
  },
  pricing: {
    currency: "¥",
    period: "/月",
    plans: {
      basic: {
        name: "小杯",
        description: "个人用户的理想选择",
        price: "8.99",
        badge: "",
        buttonText: "立即开始",
        buttonLink: "https://user.xrista.net",
        features: [
          "connections",
          "servers",
          "encryption",
          "support",
          "guarantee",
          "nologs",
        ],
      },
      pro: {
        name: "中杯",
        description: "高级用户的首选方案",
        price: "19.99",
        badge: "最受欢迎",
        buttonText: "免费试用",
        buttonLink: "https://user.xrista.net",
        features: [
          "connections_pro",
          "servers_pro",
          "encryption_pro",
          "support_pro",
          "guarantee",
          "nologs",
          "adblocker",
          "bandwidth",
          "tunneling",
        ],
      },
      enterprise: {
        name: "大杯",
        description: "团队协作的完美解决方案",
        price: "29.99",
        badge: "",
        buttonText: "联系销售",
        buttonLink: "https://user.xrista.net",
        features: [
          "connections_enterprise",
          "servers_enterprise",
          "encryption_enterprise",
          "support_enterprise",
          "guarantee",
          "nologs",
          "adblocker",
          "bandwidth",
          "tunneling",
          "dashboard",
          "sso",
          "api",
        ],
      },
    } as const,
  },
  navigation: [
    {
      name: "产品特色",
      href: "#features",
    },
    {
      name: "套餐价格",
      href: "#pricing",
    },
    {
      name: "关于我们",
      href: "/about",
    },
  ] as const,
  cta: {
    primaryButton: {
      text: "免费试用",
      link: "https://user.xrista.net",
    },
    secondaryButton: {
      text: "查看套餐",
      link: "https://user.xrista.net",
    },
  },
  footer: {
    sections: {
      product: {
        features: "#features",
        pricing: "#pricing",
        download: "https://user.xrista.net",
      },
      company: {
        about: "/about",
        blog: "https://user.xrista.net",
        contact: "https://user.xrista.net",
      },
      legal: {
        privacy: "https://user.xrista.net",
        terms: "https://user.xrista.net",
        security: "https://user.xrista.net",
      },
    },
  },
  analytics: {
    enabled: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true" || false,
  },
} as const;

export const navigation: readonly NavigationItem[] = siteConfig.navigation;

export type SiteConfig = typeof siteConfig;