/* Third Party */
import React from "react";

/* Components */
import HorizontalScroll from "../../../Components/HorizontalScroll";
import SectionBand from "../../../Components/SectionBand";
import CustomCard from "../../../Components/Card";
import {
  CardsContainer,
  HorizontalSection,
  VerticalContainer,
} from "./style";
import { locations } from "../../LocationPages/constants";

/* Functions */

/*https://sudo.isl.co/translate-vertical-horizontal/*/

const cards = locations.map((location) => (
  <CustomCard
    key={location.slug}
    image={location.image}
    header={location.name}
    credit={location.credit}
    url={`/location/${location.slug}`}
  />
));

export default function SlideSection() {
  return (
    <section id="explore" aria-labelledby="explore-title">
      <SectionBand id="explore-title">
        Start Exploring <em>Wherever</em> You Want
      </SectionBand>
      <HorizontalSection $isDesktop>
        <HorizontalScroll>
          <CardsContainer>{cards}</CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>

      <HorizontalSection>
        <VerticalContainer>
          <CardsContainer className="vertical-cards-container">
            {cards}
          </CardsContainer>
        </VerticalContainer>
      </HorizontalSection>
    </section>
  );
}
