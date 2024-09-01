import { siteData } from "./config";

export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: ['/','/about','/projects','/contact'],
      },
      sitemap: `${siteData.baseUrl}/sitemap.xml`,
    }
  }