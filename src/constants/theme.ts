declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    dark: string;
    black: string;
    white: string;
    inactiveLink: string;
    darkBg: string;
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
    mobile: number;
  };
  breakpoints: {
    desktop: number;
  };
  iconSizes: {
    menuBtn: number;
    socialLink: number;
    donationLink: number;
    closeClientDetailsBtn: number;
    reviewsSlider: number;
    breadcrumbs: number;
    servicesListBtn: number;
  };
  zIndex: {
    loader: number;
    animatedModalWin: number;
    menuBtn: number;
    contactsModalWin: number;
    header: number;
    principlesSliderControls: number;
  };
  transitionDurationAndFunc: { all: string; process: string };
  spacing: (value?: number) => number;
}

const theme: ITheme = {
  colors: {
    dark: '#0a0a0a',
    darkBg: '#090C08',
    black: '#000000',
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
    mobile: 335,
  },
  zIndex: {
    loader: 10,
    menuBtn: 10,
    header: 10,
    principlesSliderControls: 10,
    contactsModalWin: 100,
    animatedModalWin: 100000,
  },
  breakpoints: {
    desktop: 1440,
  },
  // shadows: {  },
  iconSizes: {
    donationLink: 7,
    breadcrumbs: 9,
    reviewsSlider: 11,
    servicesListBtn: 11,
    socialLink: 14,
    closeClientDetailsBtn: 14,
    menuBtn: 17,
  },
  transitionDurationAndFunc: {
    all: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
    process: '600ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  spacing: (value = 1) => value * 4,
};

export default theme;
