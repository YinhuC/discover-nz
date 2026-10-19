import React, { useState } from "react";
import { CursorContext } from "./CursorContext";
import { Cursor } from "..";

export default function CursorManager({ children }) {
  const [type, setType] = useState("default");

  return (
    <CursorContext.Provider value={setType}>
      <Cursor type={type} />
      {children}
    </CursorContext.Provider>
  );
}
