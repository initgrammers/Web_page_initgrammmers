/* eslint-disable react/no-danger */

const Organization = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'InitGrammers',
          url: 'https://initgrammers.com/',
          logo:
            'https://res.cloudinary.com/initgrammers/image/upload/v1614019631/logo-initGrammers.png',
          sameAs: [
            'https://www.facebook.com/InitGrammers/',
            'https://www.instagram.com/initgrammers/',
            'https://www.youtube.com/channel/UCglgo5DR6UOdU9KFVP58R3w',
            'https://ec.linkedin.com/company/initgrammersec',
            'https://initgrammers.com/',
          ],
        }),
      }}
    />
  </>
);

export default Organization;
