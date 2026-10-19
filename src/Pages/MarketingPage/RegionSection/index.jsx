/* Third Party */
import React, { useContext, useState } from "react";

/* Components */
import SectionBand from "../../../Components/SectionBand";
import ArrowLink from "../../../Components/ArrowLink";
import { CursorContext } from "../../../Components/Cursor/Context/CursorContext";
import { islands, licenseUrls } from "./constants";
import {
  RegionsContainer,
  Island,
  IslandHeader,
  IslandTitle,
  IslandCount,
  RegionGrid,
  Region,
  Figure,
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

function IslandRegions({ island }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { setType } = useContext(CursorContext);
  const gridId = `regions-${island.name.toLowerCase().replace(/\s+/g, "-")}`;
  const visible = isExpanded
    ? island.regions
    : island.regions.slice(0, PREVIEW_COUNT);

  return (
    <Island aria-labelledby={`${gridId}-title`}>
      <IslandHeader>
        <IslandTitle id={`${gridId}-title`}>{island.name}</IslandTitle>
        <IslandCount>{island.regions.length} regions</IslandCount>
      </IslandHeader>
      <RegionGrid id={gridId}>
        {visible.map((region) => (
          <Region key={region.link}>
            <Figure>
              <RegionImage
                src={region.image}
                alt={`${region.caption}, ${region.name}`}
                loading="lazy"
                decoding="async"
              />
              <ImageCaption aria-hidden="true">{region.caption}</ImageCaption>
            </Figure>
            <Credit credit={region.credit} />
            <RegionTitle>{region.name}</RegionTitle>
            <RegionText>{region.info}</RegionText>
            <ArrowLink href={`https://www.newzealand.com/nz/${region.link}/`}>
              Explore {region.name}
            </ArrowLink>
          </Region>
        ))}
      </RegionGrid>
      {island.regions.length > PREVIEW_COUNT && (
        <ToggleButton
          type="button"
          aria-expanded={isExpanded}
          aria-controls={gridId}
          onClick={() => setIsExpanded(!isExpanded)}
          onMouseEnter={() => setType("expand")}
          onMouseLeave={() => setType("default")}
        >
          {isExpanded
            ? `Show fewer ${island.name} regions`
            : `Show all ${island.regions.length} ${island.name} regions`}
        </ToggleButton>
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
