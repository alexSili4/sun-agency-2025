import { IUseModalWinProps, IUseModalWin } from '@/types/hooks.types';
import { DivClickEvent } from '@/types/types';
import { useEffect } from 'react';

const useModalWin = ({
  setModalWinState,
  showModalWin,
}: IUseModalWinProps): IUseModalWin => {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const hideModalWin = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setModalWinState();
      }
    };

    if (showModalWin) {
      window.addEventListener('keydown', hideModalWin);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', hideModalWin);
    };
  }, [setModalWinState, showModalWin]);

  const hideModalWin = (e: DivClickEvent) => {
    if (e.target === e.currentTarget) {
      setModalWinState();
    }
  };

  return { modalRoot, hideModalWin };
};

export default useModalWin;
