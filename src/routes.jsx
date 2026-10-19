/* Third Party */
import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { gsap } from "gsap";

/* Components */
import MarketingPage from "./Pages/MarketingPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Pages/ErrorPage";
import LocationComponent from "./Components/LocationSection";
import { locationRoutes } from "./Pages/LocationPages/constants";
import Loader from "./Components/Loader";

export function Routing() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#promote-header", {
        delay: 0.5,
        duration: 1,
        y: 20,
        opacity: 0,
        ease: "power2",
      });
    });
    return () => ctx.revert();
  });

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            loader ? (
              <Loader />
            ) : (
              <>
                <MarketingPage />
                <Outlet />
              </>
            )
          }
        />

        {locationRoutes.map((route, index) => (
          <Route
            key={`location-page-${index}`}
            path={`/location/${route.path}`}
            element={
              <LocationComponent
                image={route.image}
                locationName={route.path}
                colour={route.color}
              />
            }
          />
        ))}

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}
