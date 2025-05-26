export const colors = {
  primary: '#0064FF',

  gray100: '#f0f0f0',
  gray200: '#cacaca',
  gray300: '#434343',
} as const;

export type ColorsType = typeof colors;
export type ColorKeysType = keyof typeof colors;
