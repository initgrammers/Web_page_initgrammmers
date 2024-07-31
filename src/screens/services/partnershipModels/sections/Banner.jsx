import PartnershipModelsBanner from '#Components/Banner';
import usePartnershipModels from '#constants/services/partnershipModels';
import { contactsLinks } from '#app/constants/contacts';
import { useTheme } from '@mui/material';

const Banner = () => {
  const { palette } = useTheme();
  const { bannerPartnershipModels } = usePartnershipModels();
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
