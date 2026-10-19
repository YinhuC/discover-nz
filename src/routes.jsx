/* Third Party */
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { gsap } from "gsap";

/* Components */
import MarketingPage from "./Pages/MarketingPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Pages/ErrorPage";
import LocationComponent from "./Components/LocationSection";
import { locations } from "./Pages/LocationPages/constants";
import Loader from "./Components/Loader";

const MIN_LOADER_MS = 1800;

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
      document.getElementById(hash.slice(1))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, isReady]);
}

export function Routing() {
  const [loader, setLoader] = useState(true);
  useScrollOnNavigate(!loader);

  useEffect(() => {
    let isActive = true;
    const minimumWait = new Promise((resolve) =>
      setTimeout(resolve, MIN_LOADER_MS)
    );
    Promise.all([document.fonts.ready, minimumWait]).then(() => {
      if (isActive) {
        setLoader(false);
      }
    });
    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#promote-header", {
        delay: 0.5,
        duration: 1,
        y: 20,
        opacity: 0,
        ease: "power2",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <Routes>
          <Route path="/" element={loader ? <Loader /> : <MarketingPage />} />

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
