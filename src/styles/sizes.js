// https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632
// https://spec.fm/specifics/8-pt-grid
// https://rebassjs.org/theming#example

// todo: create array from names instead
const sizesArr = [0, 4, 8, 16, 32, 48, 64, 128, 256];
const sizesNamed = {
  xxSmall: `${sizesArr[1]}px`,
  xSmall: `${sizesArr[2]}px`,
  small: `${sizesArr[3]}px`,
  regular: `${sizesArr[4]}px`,
  medium: `${sizesArr[5]}px`,
  large: `${sizesArr[6]}px`,
  xLarge: `${sizesArr[7]}px`,
  xxLarge: `${sizesArr[8]}px`,
};

export default sizesNamed;
