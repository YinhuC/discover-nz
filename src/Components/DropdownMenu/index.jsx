/* Third Party */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

/* Components */
import {
  Overlay,
  MenuInner,
  DestinationList,
  DestinationLink,
  Preview,
  PreviewImage,
  SecondaryList,
  SecondaryLink,
  MenuLabel,
} from "./style";
import { useCursorHover } from "../Cursor/Context/CursorContext";
import { locationPath, locations } from "../../Pages/LocationPage/constants";

/* Functions */

const secondaryLinks = [
  { to: "/", label: "Home" },
  { to: "/#before-you-go", label: "Before you go" },
  { to: "/#regions", label: "Plan your journey" },
  { to: "/#contact", label: "Contact" },
];

function DropdownMenu({ isOpen, onNavigate }) {
  const cursorProps = useCursorHover();
  const [previewIndex, setPreviewIndex] = useState(0);
  const [hasOpened, setHasOpened] = useState(false);
  const firstLinkRef = useRef(null);

  if (isOpen && !hasOpened) {
    setHasOpened(true);
  }

  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus({ preventScroll: true });
    }
  }, [isOpen]);

  return (
    <Overlay id="site-menu" aria-label="Main" $isOpen={isOpen} inert={!isOpen}>
      <MenuInner>
        <div>
          <MenuLabel>Destinations</MenuLabel>
          <DestinationList>
            {locations.map((location, i) => (
              <li key={location.slug} style={{ "--i": i }}>
                <DestinationLink
                  ref={i === 0 ? firstLinkRef : undefined}
                  to={locationPath(location.slug)}
                  onClick={onNavigate}
                  onFocus={() => setPreviewIndex(i)}
                  onMouseEnter={() => {
                    setPreviewIndex(i);
                    cursorProps.onMouseEnter();
                  }}
                  onMouseLeave={cursorProps.onMouseLeave}
                >
                  {location.name}
                </DestinationLink>
              </li>
            ))}
          </DestinationList>
          <SecondaryList>
            {secondaryLinks.map((link) => (
              <li key={link.to}>
                <SecondaryLink
                  as={Link}
                  to={link.to}
                  onClick={onNavigate}
                  {...cursorProps}
                >
                  {link.label}
                </SecondaryLink>
              </li>
            ))}
          </SecondaryList>
        </div>
        <Preview aria-hidden="true">
          {hasOpened &&
            locations.map((location, i) => (
              <PreviewImage
                key={location.slug}
                src={location.image}
                alt=""
                loading="lazy"
                $isActive={i === previewIndex}
              />
            ))}
        </Preview>
      </MenuInner>
    </Overlay>
  );
}

export default DropdownMenu;
