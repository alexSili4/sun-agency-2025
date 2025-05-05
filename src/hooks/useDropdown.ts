import { useEffect, useState } from 'react';
import { RefDivObject } from '@/types/types';
import { makeBlur } from '@/utils';
import { BtnClickEvent } from '@/types/types';
import { IUseDropdown } from '@/types/hooks.types';

const useDropdown = (listRef: RefDivObject): IUseDropdown => {
  const [isShowList, setIsShowList] = useState<boolean>(false);
  const [listHeight, setListHeight] = useState<number>(0);

  useEffect(() => {
    const list = listRef.current;

    if (list) {
      setListHeight(list.scrollHeight);
    }
  }, [listRef]);

  const toggleIsShowList = () => {
    setIsShowList((prevState) => !prevState);
  };

  const onShowListBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleIsShowList();
  };

  const onBackdropClick = () => {
    toggleIsShowList();
  };

  return { isShowList, listHeight, onBackdropClick, onShowListBtnClick };
};

export default useDropdown;
