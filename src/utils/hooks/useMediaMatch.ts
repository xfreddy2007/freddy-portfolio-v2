import { useState, useEffect } from 'react';

export default function useMediaMatch(query: string): boolean {
  const [isMatch, setIsMatch] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    const atMediaChange = () => setIsMatch(media.matches);
    atMediaChange();

    // https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent
    const hasMeidaAddEventListener = 'addEventListener' in media;
    if (hasMeidaAddEventListener) {
      media.addEventListener('change', atMediaChange);
    } else {
      media.addListener(atMediaChange);
    }
    return () => {
      if (hasMeidaAddEventListener) {
        media.removeEventListener('change', atMediaChange);
      } else {
        media.removeListener(atMediaChange);
      }
    };
  }, [query]);
  return isMatch;
}
