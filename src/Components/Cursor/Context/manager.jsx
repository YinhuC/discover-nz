import React, { useState } from "react";
import { CursorContext } from "./CursorContext";

export default function CursorManager({ children }) {
  const [type, setType] = useState("default");

  return (
    <CursorContext.Provider value={{ type, setType }}>
      {children}
    </CursorContext.Provider>
  );
}
