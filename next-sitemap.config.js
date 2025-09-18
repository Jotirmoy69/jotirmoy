/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jotirmoy.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
