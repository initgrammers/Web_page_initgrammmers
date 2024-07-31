import React from 'react'
import ContactUsBanner from '#Components/Banner';
import useContactUs from '#app/constants/ContactUs';
import { contactsLinks } from '#app/constants/contacts';


const Banner = () => {
  const {bannerContactUsPage} = useContactUs();
  return (
    <ContactUsBanner
      backgroundImage={bannerContactUsPage.backgroundImage}
      heightImage={bannerContactUsPage.heightImage}
      titlePart1={bannerContactUsPage.titlePart1}
      description={bannerContactUsPage.description}
      image={bannerContactUsPage.image}
      hrefContactUs={contactsLinks.callUs}
    />
  )
}

export default Banner