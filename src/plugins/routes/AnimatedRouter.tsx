/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router";
import mTravelRoutes from ".";
import "./transition.css";

export default function AnimatedRouter({ code }: { code: string }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location]);

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      {code && (
        <Routes location={displayLocation}>
          {mTravelRoutes.map((route, index) => (
            <Route
              key={route.component + index}
              element={route.component}
              path={route.path}
            />
          ))}
        </Routes>
      )}
    </div>
  );
}
