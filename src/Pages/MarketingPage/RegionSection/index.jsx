/* Third Party */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FiMaximize2 } from "react-icons/fi";

/* Components */
import SectionBand from "../../../Components/SectionBand";
import ArrowLink from "../../../Components/ArrowLink";
import { useCursorHover } from "../../../Components/Cursor/Context/CursorContext";
import { islands, licenseUrls } from "./constants";
import Lightbox from "./Lightbox";
import { dropWords, gsap, playOnEnter, revealImage, ScrollTrigger } from "../../../Utils/motion";
import {
  RegionsContainer,
  Island,
  IslandHeader,
  IslandTitle,
  IslandCount,
  RegionGrid,
  Region,
  Figure,
  ZoomButton,
  ZoomHint,
  RegionImage,
  ImageCaption,
  PhotoCredit,
  RegionTitle,
  RegionText,
  ToggleButton,
} from "./style";

/* Functions */

const PREVIEW_COUNT = 6;

function Credit({ credit }) {
  const licenseUrl = licenseUrls[credit.license];
  if (licenseUrl === undefined) {
    throw new Error(`No licence URL for "${credit.license}"; add it to licenseUrls.`);
  }

  return (
    <PhotoCredit>
      Photo:{" "}
      <a href={credit.source} target="_blank" rel="noopener noreferrer">
        {credit.artist}
      </a>
      {" · "}
      {licenseUrl ? (
        <a href={licenseUrl} target="_blank" rel="noopener noreferrer">
          {credit.license}
        </a>
      ) : (
        credit.license
      )}
    </PhotoCredit>
  );
}

function RegionItem({ region, thumbRef, onOpen }) {
  const cursorProps = useCursorHover();
  const itemRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealImage(".region-figure", ".region-image");
      gsap.from(".region-copy", {
        y: 28,
        opacity: 0,
        duration: 1,
        delay: 0.35,
        stagger: 0.06,
        ease: "expo.out",
        ...playOnEnter(itemRef.current, "top 90%"),
      });
    }, itemRef);
    return () => ctx.revert();
  }, []);

  return (
    <Region ref={itemRef}>
      <Figure className="region-figure">
        <ZoomButton
          type="button"
          onClick={onOpen}
          {...cursorProps}
          aria-label={`Enlarge photo of ${region.name}`}
          aria-haspopup="dialog"
        >
          <RegionImage
            ref={thumbRef}
            className="region-image"
            src={region.image}
            alt={`${region.caption}, ${region.name}`}
            loading="lazy"
            decoding="async"
          />
          <ImageCaption aria-hidden="true">{region.caption}</ImageCaption>
          <ZoomHint aria-hidden="true">
            <FiMaximize2 />
          </ZoomHint>
        </ZoomButton>
      </Figure>
      <Credit credit={region.credit} />
      <RegionTitle className="region-copy">{region.name}</RegionTitle>
      <RegionText className="region-copy">{region.info}</RegionText>
      <ArrowLink
        className="region-copy"
        href={`https://www.newzealand.com/nz/${region.link}/`}
      >
        Explore {region.name}
      </ArrowLink>
    </Region>
  );
}

function IslandRegions({ island }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const thumbs = useRef(new Map());
  const openerRef = useRef(null);
  const cursorProps = useCursorHover();
  const headerRef = useRef(null);
  const hasMountedRef = useRef(false);
  const gridId = `regions-${island.name.toLowerCase().replace(/\s+/g, "-")}`;
  const visible = isExpanded
    ? island.regions
    : island.regions.slice(0, PREVIEW_COUNT);

  useEffect(() => {
    const ctx = gsap.context(() => {
      dropWords(".island-title", { trigger: headerRef.current });
      gsap.from(headerRef.current, {
        "--rule-scale": 0,
        duration: 1.4,
        ease: "expo.inOut",
        ...playOnEnter(headerRef.current),
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }
    ScrollTrigger.refresh();
  }, [isExpanded]);

  const getThumb = useCallback(
    (index) => thumbs.current.get(island.regions[index].link) ?? null,
    [island.regions]
  );

  const dismissLightbox = (index) => {
    setOpenIndex(null);
    const returnTo = getThumb(index)?.closest("button") ?? openerRef.current;
    returnTo?.focus({ preventScroll: true });
  };

  return (
    <Island aria-labelledby={`${gridId}-title`}>
      <IslandHeader ref={headerRef}>
        <IslandTitle id={`${gridId}-title`} className="island-title">
          {island.name}
        </IslandTitle>
        <IslandCount>{island.regions.length} regions</IslandCount>
      </IslandHeader>
      <RegionGrid id={gridId}>
        {visible.map((region, index) => (
          <RegionItem
            key={region.link}
            region={region}
            onOpen={(event) => {
              openerRef.current = event.currentTarget;
              setOpenIndex(index);
            }}
            thumbRef={(image) => {
              if (image) {
                thumbs.current.set(region.link, image);
              } else {
                thumbs.current.delete(region.link);
              }
            }}
          />
        ))}
      </RegionGrid>
      {island.regions.length > PREVIEW_COUNT && (
        <ToggleButton
          type="button"
          aria-expanded={isExpanded}
          aria-controls={gridId}
          onClick={() => setIsExpanded(!isExpanded)}
          {...cursorProps}
        >
          {isExpanded
            ? `Show fewer ${island.name} regions`
            : `Show all ${island.regions.length} ${island.name} regions`}
        </ToggleButton>
      )}
      {openIndex !== null && (
        <Lightbox
          regions={island.regions}
          index={openIndex}
          getThumb={getThumb}
          onNavigate={setOpenIndex}
          onDismiss={dismissLightbox}
        />
      )}
    </Island>
  );
}

function RegionSection() {
  return (
    <section id="regions" aria-labelledby="regions-title">
      <SectionBand id="regions-title">
        Plan Your <em>Journey</em>
      </SectionBand>
      <RegionsContainer>
        {islands.map((island) => (
          <IslandRegions key={island.name} island={island} />
        ))}
      </RegionsContainer>
    </section>
  );
}

export default RegionSection;
