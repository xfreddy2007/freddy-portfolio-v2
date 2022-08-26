const debounce = (callback: (...args: any[]) => void, time: number) => {
  let timer: any;
  return (...args: any[]) => {
    const later = () => {
      clearTimeout(timer);
      callback(...args);
    };
    clearTimeout(timer);
    timer = setTimeout(later, time);
  };
};

export default debounce;
