/* Third Party */
import React from 'react';

/* Components */
import HeaderSection from './HeaderSection';
import SlideSection from './SlideSection';
import CovidSection from './CovidSection';
import RegionSection from './RegionSection';
import ContactSection from './ContactSection';
import { Main } from './style';

/* Functions */

function MarketingPage() {
  return (
    <Main>
      <HeaderSection />
      <CovidSection />
      <SlideSection />
      <RegionSection />
      <ContactSection />
    </Main>
  );
}

export default MarketingPage;
