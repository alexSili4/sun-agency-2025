declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: { body: string; white: string };
  fontFamily: {
    involve: string;
    inter: string;
  };
  padding: {
    container: number;
  };
  containerWidth: {
    desktop: number;
  };
  iconSizes: {
    menuBtn: number;
  };
  zIndex: {
    menuBtn: number;
    contactsModalWin: number;
  };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: { body: '#0a0a0a', white: '#ffffff' },
  fontFamily: {
    involve: 'Involve',
    inter: 'Inter',
  },
  // fontWeight: {  },
  // fontSize: {  },
  padding: {
    container: 16,
  },
  // borderRadius: {  },
  containerWidth: {
    desktop: 1352,
  },
  zIndex: {
    menuBtn: 10,
    contactsModalWin: 100,
  },
  // shadows: {  },
  iconSizes: { menuBtn: 17 },
  transitionDurationAndFunc: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
