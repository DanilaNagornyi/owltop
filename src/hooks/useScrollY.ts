import {useEffect, useState} from "react";

const useScrollY = (): number => {
  const [scrollY, setScrollY] = useState<number>(0);

  const isLoadWindow = typeof window !== 'undefined';

  const handleScroll = () => {
    const currentScrollY = isLoadWindow ? window.scrollY : 0;
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

export default useScrollY;
