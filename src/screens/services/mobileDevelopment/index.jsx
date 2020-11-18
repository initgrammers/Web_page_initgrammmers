import Banner from './components/Banner';
import ImportanceApplications from './components/ImportanceApplications';
import ApplicationsAtYourFingertips from './sections/ApplicationsAtYourFingertips';
import MobileApplicationTypes from './sections/MobileApplicationTypes';
import SliderHidden from './sections/SliderHidden';
import Accordion from './sections/Accordion';

const index = () => (
  <>
    <Banner />
    <ImportanceApplications />
    <MobileApplicationTypes />
    <SliderHidden />
    <ApplicationsAtYourFingertips />
    <Accordion />
  </>
);

export default index;
