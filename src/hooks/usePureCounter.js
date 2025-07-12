// src/hooks/usePureCounter.js
import { useEffect, useState } from "react";

export function usePureCounter(end = 100, duration = 2) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(handle);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);
    return () => clearInterval(handle);
  }, [end, duration]);
  return count;
}
