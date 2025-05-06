declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    dark: string;
    black: string;
    white: string;
    white70: string;
    white50: string;
    white21: string;
    white10: string;
    white7: string;
    inactiveLink: string;
    darkBg: string;
    error: string;
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
    contactsServices: number;
    menuBtn: number;
    socialLink: number;
    donationLink: number;
    closeClientDetailsBtn: number;
    reviewsSlider: number;
    breadcrumbs: number;
    servicesListBtn: number;
    contactsLabel: number;
    contactsCopy: number;
    contactsTg: number;
    contactsArrow: number;
    clientsServices: number;
  };
  zIndex: {
    ourProcessSection: number;
    loader: number;
    animatedModalWin: number;
    menuBtn: number;
    contactsModalWin: number;
    header: number;
    principlesSliderControls: number;
    serviceBtn: number;
  };
  transitionDurationAndFunc: { all: string; process: string; about: string };
  spacing: (value?: number) => number;
}

const theme: ITheme = {
  colors: {
    dark: '#0a0a0a',
    darkBg: '#090C08',
    black: '#000000',
    inactiveLink: '#3e4648',
    error: 'rgba(255, 52, 7, 0.7)',
    // white
    white: '#ffffff',
    white70: 'rgba(255, 255, 255, 0.7)',
    white50: 'rgba(255, 255, 255, 0.5)',
    white21: 'rgba(255, 255, 255, 0.21)',
    white10: 'rgba(255, 255, 255, 0.1)',
    white7: 'rgba(255, 255, 255, 0.07)',
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
    serviceBtn: 10,
    ourProcessSection: 10,
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
    contactsCopy: 14,
    socialLink: 14,
    closeClientDetailsBtn: 14,
    clientsServices: 16,
    contactsServices: 16,
    contactsArrow: 16,
    contactsTg: 16,
    menuBtn: 17,
    contactsLabel: 20,
  },
  transitionDurationAndFunc: {
    all: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
    process: '800ms ease-in-out',
    about: '2000ms ease-in-out',
  },
  spacing: (value = 1) => value * 4,
};

export default theme;
