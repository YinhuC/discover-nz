/* Third Party */
import React from "react";

/* Components */
import HeroSection from "./HeroSection";
import BeforeYouGoSection from "./BeforeYouGoSection";
import SlideSection from "./SlideSection";
import RegionSection from "./RegionSection";
import ContactSection from "./ContactSection";
import { Main } from "./style";

/* Functions */

function MarketingPage() {
  return (
    <Main>
      <title>Discover New Zealand</title>
      <HeroSection />
      <BeforeYouGoSection />
      <SlideSection />
      <RegionSection />
      <ContactSection />
    </Main>
  );
}

export default MarketingPage;
