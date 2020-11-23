import Banner from './components/Banner';
import ImportanceApplications from './components/ImportanceApplications';
import ApplicationsAtYourFingertips from './sections/ApplicationsAtYourFingertips';
import MobileApplicationTypes from './sections/MobileApplicationTypes';
import Questions from './sections/Questions';
import SliderTech from './sections/SliderTech';
// TODO delete this component and references
// import SliderHidden from './sections/SliderHidden';

const MobileDevelopment = () => (
  <>
    <Banner />
    <ImportanceApplications />
    <SliderTech />
    <MobileApplicationTypes />
    <ApplicationsAtYourFingertips />
    <Questions />
  </>
);

export default MobileDevelopment;
