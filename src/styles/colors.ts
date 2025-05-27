export const colors = {
  primary: '#1d78ff',
  primaryHover: '#0066ff',
  primaryDisabled: '#569aff',

  gray100: '#f0f0f0',
  gray150: '#e4e4e4',
  gray200: '#cacaca',
  gray250: '#5d5d5d',
  gray300: '#434343',
} as const;

export type ColorsType = typeof colors;
export type ColorKeysType = keyof typeof colors;
