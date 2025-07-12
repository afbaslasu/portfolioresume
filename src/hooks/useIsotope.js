// src/hooks/useIsotope.js
import { useEffect, useRef } from "react";
import Isotope from "isotope-layout";

export function useIsotope(deps = []) {
  const iso = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      iso.current = new Isotope(gridRef.current, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      });
    }
    return () => iso.current && iso.current.destroy();
  }, deps);

  const filter = (selector) => {
    if (iso.current) iso.current.arrange({ filter: selector });
  };

  return { gridRef, filter };
}
