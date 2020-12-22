import CallToActionSection from '#Components/CallToActionSection';
import { increaseYourSalesInOneClick } from '#constants/services/ShopOnline';
import theme from 'theme';

const UnforgettableExperiences = () => (
  <CallToActionSection
    titlePart1={increaseYourSalesInOneClick.titlePart1}
    titlePart2={increaseYourSalesInOneClick.titlePart2}
    description={increaseYourSalesInOneClick.description}
    image={increaseYourSalesInOneClick.image}
    backgroundImage={increaseYourSalesInOneClick.backgroundImage}
    heightImage={increaseYourSalesInOneClick.heightImage}
    imageSizes={increaseYourSalesInOneClick.imageSizes}
    backgroundColor={theme.palette.primary.fade}
  />
);

export default UnforgettableExperiences;
