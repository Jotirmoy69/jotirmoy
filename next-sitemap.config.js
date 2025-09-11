/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jotirmoy.vercel.app',  // ✅ your real deployed site
  generateRobotsTxt: true,                 // generate robots.txt automatically
  exclude: ['/server-sitemap.xml'],        // optional, exclude internal stuff
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
