/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jotirmoy.vercel.app', // your real URL
  generateRobotsTxt: true,                // automatically generate robots.txt
  // generateIndexSitemap: false,
  exclude: ['/api/*', '/_next/*'],       // exclude API routes and Next.js internals
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
