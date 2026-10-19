/* Third Party */
import React, { useEffect, useRef } from "react";

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
import { gsap, revealImage } from "../../../Utils/motion";

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
  const rowRef = useRef(null);
  const columnRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.utils.toArray(".image-container", rowRef.current).forEach((card, index) => {
        revealImage(card, card.querySelector(".card-image"), {
          from: "right",
          delay: index * 0.14,
          trigger: rowRef.current,
        });
      });
    });
    mm.add("(max-width: 767px)", () => {
      gsap.utils.toArray(".image-container", columnRef.current).forEach((card) => {
        revealImage(card, card.querySelector(".card-image"));
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="explore" aria-labelledby="explore-title">
      <SectionBand id="explore-title">
        Start Exploring <em>Wherever</em> You Want
      </SectionBand>
      <HorizontalSection ref={rowRef} className="d-none d-md-flex">
        <HorizontalScroll>
          <CardsContainer>{cards}</CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>

      <HorizontalSection ref={columnRef} className="d-flex d-md-none">
        <VerticalContainer>
          <CardsContainer className="vertical-cards-container flex-column">
            {cards}
          </CardsContainer>
        </VerticalContainer>
      </HorizontalSection>
    </section>
  );
}
