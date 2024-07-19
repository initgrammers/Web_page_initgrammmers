/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';

const WebSite = ({
  title = 'Diseño, desarrollo de aplicaciones web y móviles - InitGrammers',
  url = 'https://initgrammers.com/',
}) => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'WebSite',
          name: `${title}`,
          url: `${url}`,
          potentialAction: {
            '@type': 'SearchAction',
            target: '{search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }),
      }}
    />
  </>
);

WebSite.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default WebSite;
