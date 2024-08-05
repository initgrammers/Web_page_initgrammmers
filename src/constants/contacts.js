const { useLocale } = require('next-intl');

const useContacts = () => {
  const locale = useLocale();
  const localizedHref = `/${locale}/contact-us`;

  const contactsLinks = {
    landing: localizedHref,
    general: localizedHref,
    webPages: localizedHref,
    mobileApps: localizedHref,
    uiuxPages: localizedHref,
    shopEcommercePage: localizedHref,
    marketingDigitalPage: localizedHref,
    partnershipModelsPage: localizedHref,
    aboutUsPage: localizedHref,
    consulting: localizedHref,
    teamMessage: localizedHref,
    writeUs: localizedHref,
    startProject: localizedHref,
    callUs: localizedHref,
  };

  const textContactUsButton = {
    whatsapp: 'Contáctanos',
    email: 'Contáctanos por correo',
  };

  return {
    contactsLinks,
    textContactUsButton,
  };
};

export default useContacts;
