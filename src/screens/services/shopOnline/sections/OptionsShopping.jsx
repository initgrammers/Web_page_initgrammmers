import OptionsShoppingSection from '../components/OptionsShopping';
import { optionsShopOnline } from '#constants/services/ShopOnline';

const OptionsShopping = () => (
  <OptionsShoppingSection
    titlePart1={optionsShopOnline.titlePart1}
    titlePart2={optionsShopOnline.titlePart2}
    description={optionsShopOnline.description}
    image={optionsShopOnline.image}
    backgroundImage={optionsShopOnline.backgroundImage}
    heightImage={optionsShopOnline.heightImage}
    imageSizes={optionsShopOnline.imageSizes}
    optionsShoppingOnline={optionsShopOnline.optionsShopping}
  />
);

export default OptionsShopping;
