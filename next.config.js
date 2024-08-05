const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

module.exports = withBundleAnalyzer(withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/initgrammers/image/upload/**',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // async rewrites() {
  //   return [
  //     // {
  //     //   source: '/servicios/desarrollo-aplicaciones-y-paginas-web-ecuador',
  //     //   destination: '/services/WebDevelopment',
  //     // },
  //     // {
  //     //   source:
  //     //     '/servicios/desarrollo-aplicaciones-moviles-ios-android-ecuador',
  //     //   destination: '/services/MobileDevelopment',
  //     // },
  //     // {
  //     //   source: '/servicios/diseno-ui-ux-ecuador',
  //     //   destination: '/services/UXUIDesign',
  //     // },
  //     // // {
  //     // //   source: '/servicios/tiendas-en-linea-ecuador',
  //     // //   destination: '/services/ShopOnline',
  //     // // },
  //     // {
  //     //   source: '/servicios/capacitaciones-ecuador',
  //     //   destination: '/404',
  //     // },
  //     // // {
  //     // //   source: '/servicios/marketing-diseno-digital-ecuador',
  //     // //   destination: '/services/Marketing',
  //     // // },
  //     // {
  //     //   source: '/servicios/seo-ecuador',
  //     //   destination: '/services/SEO',
  //     // },
  //     // {
  //     //   source: '/quienes-somos',
  //     //   destination: '/AboutUs',
  //     // },
  //   ];
  // },
}));
