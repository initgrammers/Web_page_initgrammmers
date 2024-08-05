import { useTheme } from '@mui/material';
import PartnershipModelsBanner from '#Components/Banner';
import usePartnershipModels from '#constants/services/partnershipModels';
import useContacts from '#app/constants/contacts';

const Banner = () => {
  const { palette } = useTheme();
  const { bannerPartnershipModels } = usePartnershipModels();
  const { contactsLinks } = useContacts();
  return (
    <PartnershipModelsBanner
      backgroundImage={bannerPartnershipModels.backgroundImage}
      heightImage={bannerPartnershipModels.heightImage}
      titlePart2={bannerPartnershipModels.title}
      description={bannerPartnershipModels.description}
      image={bannerPartnershipModels.image}
      backgroundColor={palette.primary.fade}
      hrefContactUs={contactsLinks.partnershipModelsPage}
      buttonColor={bannerPartnershipModels.buttonColor}
    />
  );
};

export default Banner;
