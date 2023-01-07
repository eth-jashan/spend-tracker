import { pallets } from '../styles/pallets';

const defaultTheme = {
  color: {
    appBackground: pallets.black,
    cardBackgroundPrimary: pallets.lightBlack,
    primary: pallets.primary,
  },
  spacing: {
    S: 8,
    M: 12,
    L: 16,
  },
  //   font: {
  //     primary: palette.lato,
  //     secondary: palette.poppins,
  //   },
};
export const useTheme = () => defaultTheme;
// this can be modified to include more themes in the future
