import CallToActionSection from '#Components/CallToActionSection';
import { increaseYourSalesInOneClick } from '#constants/services/ShopOnline';

const UnforgettableExperiences = () => (
  <CallToActionSection
    titlePart1={increaseYourSalesInOneClick.titlePart1}
    titlePart2={increaseYourSalesInOneClick.titlePart2}
    description={increaseYourSalesInOneClick.description}
    image={increaseYourSalesInOneClick.image}
    backgroundImage={increaseYourSalesInOneClick.backgroundImage}
    heightImage={increaseYourSalesInOneClick.heightImage}
    imageSizes={increaseYourSalesInOneClick.imageSizes}
  />
);

export default UnforgettableExperiences;
