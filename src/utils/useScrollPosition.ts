import { useEffect, useState } from 'react';

export const useIsScrolled = (offset = 30) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= offset) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolled, setIsScrolled };
};

export default useIsScrolled

