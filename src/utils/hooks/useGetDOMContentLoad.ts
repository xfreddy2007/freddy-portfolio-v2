import { useState } from "react";

type useGetDOMContentLoadTypes = {
  domIsLoaded: boolean;
}

export default function useGetDOMContentLoad():useGetDOMContentLoadTypes {
  const [isLoaded, setIsLoaded] = useState(false);
  
  window.addEventListener('DOMContentLoaded', () => setIsLoaded(true));
  return {
    domIsLoaded: isLoaded,
  }
}