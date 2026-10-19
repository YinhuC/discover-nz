/* Third Party */
import React, { useState, useEffect, useContext, useRef } from "react";
import { useLocation } from "react-router";

/* Components */
import { Bar, BarInner, TourismTextContainer, MenuButton, TourismText } from "./style";
import { MenuIcon } from "../Icons/Menu";
import DropdownMenu from "../DropdownMenu";
import "./style.scss";
import { CursorContext } from "../Cursor/Context/CursorContext";

/* Functions */

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setType } = useContext(CursorContext);
  const { pathname, hash } = useLocation();
  const lastScrollRef = useRef(0);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsHidden(scrollY > lastScrollRef.current && scrollY > 120);
      setIsPastHero(scrollY > window.innerHeight - 80);
      lastScrollRef.current = scrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
    if (!isMenuOpen) {
      return undefined;
    }
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const isSolid = isPastHero && !isMenuOpen;
  const color = isSolid ? "var(--ink)" : "var(--paper)";

  return (
    <header>
      <DropdownMenu
        isOpen={isMenuOpen}
        onNavigate={() => setIsMenuOpen(false)}
      />
      <Bar $isHidden={isHidden && !isMenuOpen} $isSolid={isSolid}>
        <BarInner id="site-header">
          <TourismTextContainer
            onMouseEnter={() => setType("expand")}
            onMouseLeave={() => setType("default")}
            to="/"
          >
            <TourismText style={{ color }}>Discover New Zealand</TourismText>
          </TourismTextContainer>
          <MenuButton
            ref={menuButtonRef}
            type="button"
            className={isMenuOpen ? "Menu-toggle-open" : "Menu-toggle-closed"}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon color={color} />
          </MenuButton>
        </BarInner>
      </Bar>
    </header>
  );
}

export default Header;
