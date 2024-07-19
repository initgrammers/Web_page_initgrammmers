import Head from 'next/head';
import PropTypes from 'prop-types';

const SEO = ({
  title = 'InitGrammers',
  urlAltern = '',
  description = '',
  properties = [],
  socialVerifications = [],
}) => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
    <meta name="robots" content="index, follow" />

    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    {/* Properties */}
    {properties.map((item, index) => (
      <meta key={index} property={item.property} content={item.content} />
    ))}
    <meta
      name="google-site-verification"
      content="y1PcP4kGPOQqbyawDjt73ede4lda4WJP35jRYcnbbcE"
    />
    <meta
      name="facebook-domain-verification"
      content="f6e1m61awoty4uqq75apqhiupih6vb"
    />
    {socialVerifications.map((item) => (
      <meta
        key={item.property}
        property={item.property}
        content={item.content}
      />
    ))}

    <link rel="canonical" href={urlAltern} />
    <link rel="alternate" hrefLang="es-ec" href={urlAltern} />
    <link rel="alternate" hrefLang="x-default" href={urlAltern} />
    <link
      rel="shortcut icon"
      type="image/png"
      href="/assets/images/icono-initgrammers.png"
    />
    <link rel="apple-touch-icon" href="/assets/images/icono-initgrammers.png" />

    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  </Head>
);
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  urlAltern: PropTypes.string,
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      property: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  socialVerifications: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default SEO;
