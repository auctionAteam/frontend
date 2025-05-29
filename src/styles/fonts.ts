export const fonts = {
  h1: 'font-size: 32px; font-weight: 600; line-height: 140%;',
  h2: 'font-size: 28px; font-weight: 600; line-height: 140%;',
  h3: 'font-size: 24px; font-weight: 600; line-height: 140%;',
  h4: 'font-size: 20px; font-weight: 600; line-height: 140%;',

  subTitle1: 'font-size: 18px; font-weight: 500; line-height: 130%;',
  subTitle2: 'font-size: 16px; font-weight: 500; line-height: 120%;',

  body1: 'font-size: 14px; font-weight: 400; line-height: 120%;',
  body2: 'font-size: 12px; font-weight: 400; line-height: 120%;',
} as const;

export type FontsType = typeof fonts;
export type FontKeysType = keyof typeof fonts;
