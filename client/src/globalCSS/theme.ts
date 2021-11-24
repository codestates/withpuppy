// @ CSS PART START ///////////////////////////////////////////////////////////////
export const calcRem = (px: number) => `${px / 16}rem` as const;

// mobile first
export const renderMediaQuery = (
  display: string,
  minWidth: number,
  options?: string,
) =>
  `@media ${display} and (min-width: ${minWidth}px)${
    options ? ` ${options}` : ''
  }` as const;

export const colors = {
  black: '#2b2b2b',
  white: '#FFFFFF',
  indigo: '#181F38',
  grayOne: '#F7F7F7',
  grayTwo: '#E5E5E5',
  grayThree: '#999999',
  grayFour: '#111',
  pointColorYello: '#ffc114',
  pointColorCarrot: '#ff5248',
  pointColorMint: '#19cdca',
  pointColorBlue: '#4e80e1',
  lightblue: '#C5E2EE',
  footerColor: '#313131',
  mainColor: 'rgba(92, 61, 224)',
  subColor: 'rgba(245,240,253)',
  waringColor: '#ff0000',
  starColor: '#fd4',
  purple: '#7027A0',
  gradient: 'linear-gradient(to right, #fa9e2c, #8f50fb)',
  gradientAlt: 'linear-gradient(to right, #8f50fb, #350a4f)',
  graidentTransparent:
    'linear-gradient(to right, rgba(250, 158, 44,0.3), rgba(143, 80, 251,0.5))',
} as const;

export const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
} as const;

export const paddings = {
  xxsmall: calcRem(8),
  xsmall: calcRem(12),
  small: calcRem(16),
  base: calcRem(32),
  lg: calcRem(48),
  xl: calcRem(60),
  xxl: calcRem(72),
  xxxl: calcRem(18),
  xxxxl: calcRem(24),
  global: calcRem(16 * 6),
} as const;

export const margins = {
  xxsmal: calcRem(4),
  xsmal: calcRem(6),
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  xxxxl: calcRem(24),
  global: calcRem(16 * 6),
} as const;

export const deviceSizeUnits = {
  mobileS: 320,
  mobileM: 450,
  mobileL: 576,
  tablet: 768,
  desktop: 922,
  tabletL: 1024,
  fullScreen: 1980,
} as const;

export const mediaQuery = {
  phone: renderMediaQuery('screen', deviceSizeUnits.mobileL),
  tablet: renderMediaQuery('screen', deviceSizeUnits.tablet),
  desktop: renderMediaQuery('screen', deviceSizeUnits.desktop),
  tabletL: renderMediaQuery('screen', deviceSizeUnits.tabletL),
} as const;

// @ CSS PART END ///////////////////////////////////////////////////////////////

// # TYPE PART START ////////////////////////////////////////////////////////
export const theme = {
  colors,
  fontSizes,
  paddings,
  margins,
  deviceSizeUnits,
  mediaQuery,
};

export type ThemeType = typeof theme;
// # TYPE PART END ////////////////////////////////////////////////////////
