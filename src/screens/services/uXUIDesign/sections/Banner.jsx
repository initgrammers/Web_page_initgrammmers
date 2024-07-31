import BannerSection from '../components/Banner';
import useUxUiDesign from '#constants/services/UxUiDesign';

const Banner = () => { 
  const { bannerUxUiDesign } = useUxUiDesign();
  return (
    <BannerSection
      heightImage={bannerUxUiDesign.heightImage}
      backgroundImage={bannerUxUiDesign.backgroundImage}
      title={bannerUxUiDesign.title}
      description={bannerUxUiDesign.description}
      image={bannerUxUiDesign.image}
    />
  );
};

export default Banner;
