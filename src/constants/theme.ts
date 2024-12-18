declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    white: string;
  };
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
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: { white: '#ffffff' },
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
  // shadows: {  },
  iconSizes: { menuBtn: 17 },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
