/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';

const Article = ({ title, description, url, mainArticle }) => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${url}`,
            url: `${url}`,
          },
          headline: `${title}`,
          image:
            'https://initgrammers.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Finitgrammers%2Fimage%2Fupload%2Fv1609857584%2Fservicios%2Fdesarrollo-web%2Fpaginas-web-desarrollo-diseno-aplicaciones-web-ecuador.png&w=1920&q=100',
          description: `${description}`,
          articleBody: `${mainArticle}`,

          author: {
            '@type': 'Organization',
            name: 'InitGrammers',
          },
          publisher: {
            '@type': 'Organization',
            name: 'InitGrammers',
            logo: {
              '@type': 'ImageObject',
              url:
                'https://res.cloudinary.com/initgrammers/image/upload/v1614019631/logo-initGrammers.png',
            },
          },
          datePublished: '2021-02-22',
          dateModified: '2021-02-22',
        }),
      }}
    />
  </>
);

Article.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  mainArticle: PropTypes.string.isRequired,
};

Article.defaultProps = {
  title: 'Diseño, desarrollo de aplicaciones web y móviles - InitGrammers',
};

export default Article;
