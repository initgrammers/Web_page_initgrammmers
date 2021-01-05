module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
    path: '/_next/image',
    loader: 'default',
  },

  async rewrites() {
    return [
      {
        source: '/servicios/desarrollo-aplicaciones-web-ecuador',
        destination: '/services/WebDevelopment',
      },
      {
        source: '/servicios/desarrollo-aplicaciones-moviles-ecuador',
        destination: '/services/MobileDevelopment',
      },
      {
        source: '/servicios/diseno-ui-ux-ecuador',
        destination: '/services/UXUIDesign',
      },
      {
        source: '/servicios/comercio-electronico-ecuador',
        destination: '/services/ShopOnline',
      },
      {
        source: '/servicios/capacitaciones-ecuador',
        destination: '/services/404',
      },
      {
        source: '/servicios/marketing-diseno-digital-ecuador',
        destination: '/services/Marketing',
      },
      {
        source: '/servicios/seo-ecuador',
        destination: '/services/SEO',
      },
    ];
  },
};
