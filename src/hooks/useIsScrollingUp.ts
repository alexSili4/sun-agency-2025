import { IUseIsScrollingUpProps, IUseIsScrollingUp } from '@/types/hooks.types';
import { useEffect, useState } from 'react';

const useIsScrollingUp = ({
  element,
}: IUseIsScrollingUpProps): IUseIsScrollingUp => {
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const isScrolling = lastScrollY > 0;

  useEffect(() => {
    const targetElement = element.current;

    const handleScroll = () => {
      const currentScrollY = targetElement ? targetElement.scrollTop : 0;

      if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      setLastScrollY(currentScrollY);
    };

    targetElement?.addEventListener('scroll', handleScroll);

    return () => {
      targetElement?.removeEventListener('scroll', handleScroll);
    };
  }, [element, lastScrollY]);

  return { isScrollingUp, isScrolling };
};

export default useIsScrollingUp;
