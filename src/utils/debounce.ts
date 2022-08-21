const debounce = (callback: () => void, time: number) => {
  let timer: NodeJS.Timeout | null = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(callback, time);
  };
};

export default debounce;
