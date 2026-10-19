/* Third Party */
import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation, useNavigationType } from "react-router";
import { gsap, isReducedMotion } from "./Utils/motion";

/* Components */
import MarketingPage from "./Pages/MarketingPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Pages/ErrorPage";
import LocationComponent from "./Components/LocationSection";
import { locations } from "./Pages/LocationPages/constants";
import Loader from "./Components/Loader";

const MIN_LOADER_MS = 1800;
const LOADER_EXIT_MS = 1100;

const scrollPositions = new Map();

/** Restores the saved position on back/forward, else jumps to the hash target or the top, once layout settles. */
function useScrollOnNavigate(isReady) {
  const { key, pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const previousPathRef = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    const remember = () => scrollPositions.set(key, window.scrollY);
    window.addEventListener("scroll", remember, { passive: true });
    return () => window.removeEventListener("scroll", remember);
  }, [key]);

  useEffect(() => {
    if (!isReady) {
      return;
    }
    const isSamePage = previousPathRef.current === pathname;
    previousPathRef.current = pathname;

    const frame = requestAnimationFrame(() => {
      const saved = scrollPositions.get(key);
      if (navigationType === "POP" && saved !== undefined) {
        window.scrollTo({ top: saved, behavior: "instant" });
        return;
      }
      const target = hash && document.getElementById(hash.slice(1));
      if (!target) {
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }
      target.scrollIntoView({
        behavior: isSamePage && !isReducedMotion() ? "smooth" : "instant",
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [key, pathname, hash, navigationType, isReady]);
}

export function Routing() {
  const [phase, setPhase] = useState("loading");
  const { pathname } = useLocation();
  useScrollOnNavigate(phase !== "loading");
  const isHeaderCovered = phase === "loading" && pathname === "/";

  useEffect(() => {
    let isActive = true;
    const minimumWait = new Promise((resolve) =>
      setTimeout(resolve, MIN_LOADER_MS)
    );
    let exitTimer;
    Promise.all([document.fonts.ready, minimumWait]).then(() => {
      if (isActive) {
        setPhase("leaving");
        exitTimer = setTimeout(() => setPhase("done"), LOADER_EXIT_MS);
      }
    });
    return () => {
      isActive = false;
      clearTimeout(exitTimer);
    };
  }, []);

  useEffect(() => {
    if (isHeaderCovered) {
      return;
    }
    const ctx = gsap.context(() => {
      gsap.from("#site-header", {
        delay: 0.5,
        duration: 1,
        yPercent: -100,
        opacity: 0,
        ease: "expo.out",
      });
    });
    return () => ctx.revert();
  }, [isHeaderCovered]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {phase !== "loading" && <MarketingPage />}
                {phase !== "done" && <Loader isLeaving={phase === "leaving"} />}
              </>
            }
          />

          {locations.map((location, index) => (
            <Route
              key={location.slug}
              path={`/location/${location.slug}`}
              element={
                <LocationComponent
                  location={location}
                  next={locations[(index + 1) % locations.length]}
                  previous={
                    locations[(index - 1 + locations.length) % locations.length]
                  }
                />
              }
            />
          ))}

          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
