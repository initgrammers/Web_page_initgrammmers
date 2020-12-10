import StrategiesSection from '../components/Strategies';
import { optionStrategies } from '#constants/services/marketing';

const Strategies = () => (
  <StrategiesSection
    titlePart1={optionStrategies.titlePart1}
    titlePart2={optionStrategies.titlePart2}
    description={optionStrategies.description}
    image={optionStrategies.image}
    imageSizes={optionStrategies.imageSizes}
    optionsShoppingOnline={optionStrategies.strategies}
  />
);

export default Strategies;
