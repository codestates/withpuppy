import styled, { keyframes } from 'styled-components';

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
  mainColor: '#F7F1ED',
  secondColor: '#FEBEB0',
  thirdColor: '#E97676',
  pointColor1: '#3D5A5B',
  pointColor2: '#2F365F',
  black: '#2b2b2b',
  white: '#FFFFFF',
  indigo: '#181F38',
  grayOne: '#F7F7F7',
  grayTwo: '#E5E5E5',
  grayThree: '#999999',
  grayFour: '#111',
  gray5: '#F6F6F6',
  gray6: '#E8E8E8',
  pointColorYello: '#ffc114',
  pointColorCarrot: '#ff5248',
  pointColorMint: '#19cdca',
  pointColorBlue: '#4e80e1',
  lightblue: '#C5E2EE',
  waringColor: '#ff0000',
  starColor: '#fd4',
  purple: '#7027A0',
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

export const animation = {
  showUp: keyframes`
  from {
    opacity: 0;
    top: 70%;
  }
  to{
    opacity: 1;
    top: 50%;
  }
`,
  showLeft: keyframes`
    from{
      opacity:0;
      left: 30%;
    }
    to{
      opacity:1;
      left: 50%;
    }
  `,
};

// @ CSS PART END ///////////////////////////////////////////////////////////////

// # TYPE PART START ////////////////////////////////////////////////////////

export const theme = {
  colors,
  fontSizes,
  paddings,
  margins,
  deviceSizeUnits,
  mediaQuery,
  animation,
};

export type ThemeType = typeof theme;
// # TYPE PART END ////////////////////////////////////////////////////////
