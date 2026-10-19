/* Third Party */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

/* Components */
import {
  Section,
  SectionHeader,
  Title,
  Intro,
  EssentialList,
  Essential,
  EssentialTitle,
  EssentialText,
} from "./style";
import ArrowLink from "../../../Components/ArrowLink";

/* Functions */

gsap.registerPlugin(ScrollTrigger, SplitText);

const essentials = [
  {
    title: "Get your NZeTA",
    text: "Most visitors from visa-waiver countries need a New Zealand Electronic Travel Authority before they fly, paid together with the International Visitor Conservation and Tourism Levy. Request it on the official app or website; most are processed within 72 hours.",
    linkLabel: "Immigration New Zealand",
    href: "https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta/",
  },
  {
    title: "Declare what you bring",
    text: "Every arrival completes a New Zealand Traveller Declaration. Food, plants, animal products and used outdoor gear must be declared or left in the amnesty bins, and an undeclared risk item can mean an instant $400 fine.",
    linkLabel: "Biosecurity New Zealand",
    href: "https://www.biosecurity.govt.nz/travel-and-recreation/arriving-in-new-zealand/items-to-declare",
  },
  {
    title: "Drive on the left",
    text: "Roads are often narrow, hilly and winding, so journeys take longer than the map suggests. Carry your current overseas licence, with an English translation or international driving permit if it isn't in English.",
    linkLabel: "NZ Transport Agency",
    href: "https://www.nzta.govt.nz/travelling-on-our-roads/visitors-and-new-residents/driving-on-nz-roads",
  },
  {
    title: "Make the Tiaki Promise",
    text: "Tiaki means to care for and protect. Look after the land, sea and nature, travel safely and with consideration for others, and respect the culture and communities you visit.",
    linkLabel: "The Tiaki Promise",
    href: "https://www.newzealand.com/us/feature/tiaki-care-for-new-zealand/",
  },
];

function BeforeYouGoSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(".before-intro", { type: "lines" });
      gsap.from([".before-title", split.lines], {
        delay: 0.2,
        duration: 1,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: "power2",
        scrollTrigger: { trigger: ".before-intro", start: "top 85%" },
      });
      gsap.from(".before-item", {
        duration: 0.9,
        y: 24,
        opacity: 0,
        stagger: 0.12,
        ease: "power2",
        scrollTrigger: { trigger: ".before-list", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section id="before-you-go" ref={sectionRef} aria-labelledby="before-title">
      <SectionHeader>
        <Title id="before-title" className="before-title">
          Before You <em>Go</em>
        </Title>
        <Intro className="before-intro">
          New Zealand is easy to explore once you know a few local rules. Sort
          these out before you fly and you'll spend more time on the road and
          less time at the counter.
        </Intro>
      </SectionHeader>
      <EssentialList className="before-list">
        {essentials.map((essential) => (
          <Essential key={essential.title} className="before-item">
            <EssentialTitle>{essential.title}</EssentialTitle>
            <EssentialText>{essential.text}</EssentialText>
            <ArrowLink href={essential.href}>{essential.linkLabel}</ArrowLink>
          </Essential>
        ))}
      </EssentialList>
    </Section>
  );
}

export default BeforeYouGoSection;
