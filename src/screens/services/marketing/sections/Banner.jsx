import MarketingBanner from '#Components/Banner';
import { bannerMarketing } from '#constants/services/marketing';
import useContacts from '#app/constants/contacts';

const Banner = () => {
  const { contactsLinks } = useContacts();
  return (
    <MarketingBanner
      backgroundImage={bannerMarketing.backgroundImage}
      heightImage={bannerMarketing.heightImage}
      titlePart1={bannerMarketing.titlePart1}
      titlePart2={bannerMarketing.titlePart2}
      titlePart3={bannerMarketing.titlePart3}
      description={bannerMarketing.description}
      image={bannerMarketing.image}
      hrefContactUs={contactsLinks.marketingDigitalPage}
    />
  );
};
export default Banner;
