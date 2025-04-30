import { IUseContactsGlowingElementSize } from '@/types/hooks.types';
import useIsDesk from './useIsDesk';

const useContactsGlowingElementSize = (): IUseContactsGlowingElementSize => {
  const isDesk = useIsDesk();

  const glowingElementWidth = isDesk ? 130 : 102;
  const glowingElementGlowWidth = glowingElementWidth + 18;
  const glowingElementGlowHeight = 71;

  return {
    glowingElementGlowHeight,
    glowingElementGlowWidth,
    glowingElementWidth,
  };
};

export default useContactsGlowingElementSize;
