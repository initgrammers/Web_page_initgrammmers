import StrategiesSection from '../components/Strategies';
import { optionStrategies } from '#app/constants/services/marketing';

const Strategies = () => (
  <StrategiesSection
    titlePart1={optionStrategies.titlePart1}
    titlePart2={optionStrategies.titlePart2}
    description={optionStrategies.description}
    image={optionStrategies.image}
    backgroundImage={optionStrategies.backgroundImage}
    heightImage={optionStrategies.heightImage}
    imageSizes={optionStrategies.imageSizes}
    optionsShoppingOnline={optionStrategies.strategies}
  />
);

export default Strategies;
