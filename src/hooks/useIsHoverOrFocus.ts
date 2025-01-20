import { IUseIsHoverOrFocus } from '@/types/hooks.types';
import { useState } from 'react';

const useIsHoverOrFocus = (): IUseIsHoverOrFocus => {
  const [isHoverOrFocus, setIsHoverOrFocus] = useState<boolean>(false);

  const onItemFocus = () => {
    setIsHoverOrFocus(true);
  };

  const onItemBlur = () => {
    setIsHoverOrFocus(false);
  };

  return {
    isHoverOrFocus,
    onItemFocus,
    onItemBlur,
  };
};

export default useIsHoverOrFocus;
