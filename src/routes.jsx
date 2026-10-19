/* Third Party */
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
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

function useScrollOnNavigate(isReady) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!isReady) {
      return;
    }
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: isReducedMotion() ? "auto" : "smooth",
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, isReady]);
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
