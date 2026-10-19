import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "../../Utils/motion";
import {
  StickyInnerContainer,
  HorizontalTranslateContainer,
  TallOuterContainer,
} from "./style";

/*https://sudo.isl.co/translate-vertical-horizontal/*/

const SCROLL_TO_TRANSLATE = 3;
const FOCUS_INSET = 0.07;

const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return (objectWidth - vw) / 3.1 + 150 + vh;
};

const HorizontalScroll = ({ children }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const outerRef = useRef(null);
  const containerRef = useRef(null);
  const objectRef = useRef(null);

  useLayoutEffect(() => {
    let measuredWidth = null;
    const resizeHandler = () => {
      if (objectRef.current === null || window.innerWidth === measuredWidth) {
        return;
      }
      measuredWidth = window.innerWidth;
      setDynamicHeight(calcDynamicHeight(objectRef.current.scrollWidth));
    };
    const calculateX = () => {
      if (containerRef.current !== null) {
        setTranslateX(-containerRef.current.offsetTop * SCROLL_TO_TRANSLATE);
      }
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    window.addEventListener("scroll", calculateX, { passive: true });
    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("scroll", calculateX);
    };
  }, []);

  useEffect(() => {
    if (dynamicHeight !== null) {
      ScrollTrigger.refresh();
    }
  }, [dynamicHeight]);

  const scrollFocusedIntoView = (event) => {
    const outer = outerRef.current;
    const object = objectRef.current;
    if (outer === null || object === null) {
      return;
    }
    const cardLeft =
      event.target.getBoundingClientRect().left -
      object.getBoundingClientRect().left;
    const wanted = Math.max(0, cardLeft - window.innerWidth * FOCUS_INSET);
    const maxScroll = outer.offsetHeight - window.innerHeight;
    const outerTop = outer.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: outerTop + Math.min(wanted / SCROLL_TO_TRANSLATE, maxScroll),
      behavior: "instant",
    });
  };

  return (
    <TallOuterContainer
      ref={outerRef}
      $dynamicHeight={dynamicHeight}
      onFocus={scrollFocusedIntoView}
    >
      <StickyInnerContainer ref={containerRef}>
        <HorizontalTranslateContainer $translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
};

export default HorizontalScroll;
