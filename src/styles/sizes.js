// https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632
// https://spec.fm/specifics/8-pt-grid
// https://rebassjs.org/theming#example

// todo: create array from names instead
const sizesArr = [0, 4, 8, 16, 32, 48, 64, 128, 256];
const sizesNamed = {
  xxSmall: `${sizesArr[1]}px`, // 4
  xSmall: `${sizesArr[2]}px`, // 8
  small: `${sizesArr[3]}px`, // 16
  regular: `${sizesArr[4]}px`, // 32
  medium: `${sizesArr[5]}px`, // 48
  large: `${sizesArr[6]}px`, // 64
  xLarge: `${sizesArr[7]}px`, // 128
  xxLarge: `${sizesArr[8]}px`, // 256
};

export const sum = args => args.reduce((a, b) => a + b, []);

export default sizesNamed;
