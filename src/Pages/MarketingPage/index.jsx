/* Third Party */
import React from "react";

/* Components */
import HeaderSection from "./HeaderSection";
import BeforeYouGoSection from "./BeforeYouGoSection";
import SlideSection from "./SlideSection";
import RegionSection from "./RegionSection";
import ContactSection from "./ContactSection";
import { Main } from "./style";

/* Functions */

function MarketingPage() {
  return (
    <Main>
      <title>Promote Tourism NZ · Discover New Zealand</title>
      <HeaderSection />
      <BeforeYouGoSection />
      <SlideSection />
      <RegionSection />
      <ContactSection />
    </Main>
  );
}

export default MarketingPage;
