import {Dimensions, PixelRatio, Platform} from 'react-native';

const BASE_WIDTH = 393;
const BASE_HEIGHT = 852;
const dimensionType = Platform.OS === 'ios' ? 'screen' : 'window';
const screen = Dimensions.get(dimensionType);

const widthToDp = (givenWidth: number): number => {
  let widthValue = (givenWidth * 100) / BASE_WIDTH;
  widthValue = widthValue / 100;
  widthValue = screen.width * widthValue;
  return PixelRatio.roundToNearestPixel(widthValue);
};
const heightToDp = (givenHeight: number): number => {
  let heightValue = (givenHeight * 100) / BASE_HEIGHT;
  heightValue = heightValue / 100;
  heightValue = screen.height * heightValue;
  return PixelRatio.roundToNearestPixel(heightValue);
};

export const theme = {
  scaleWidth: (figmaUnits: number): number => widthToDp(figmaUnits),
  scaleHeight: (figmaUnits: number): number => heightToDp(figmaUnits),
  scaleFont: (figmaUnits: number): number => heightToDp(figmaUnits),
};
