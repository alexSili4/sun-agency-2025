declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    body: string;
    white: string;
    inactiveLink: string;
  };
  fontFamily: {
    involve: string;
    inter: string;
    pliska: string;
  };
  padding: {
    container: number;
  };
  containerWidth: {
    desktop: number;
  };
  iconSizes: {
    menuBtn: number;
    socialLink: number;
    donationLink: number;
  };
  zIndex: {
    menuBtn: number;
    contactsModalWin: number;
  };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    body: '#0a0a0a',
    white: '#ffffff',
    inactiveLink: '#3e4648',
  },
  fontFamily: {
    involve: 'Involve',
    inter: 'Inter',
    pliska: 'Pliska',
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
  iconSizes: { donationLink: 7, socialLink: 14, menuBtn: 17 },
  transitionDurationAndFunc: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
