import { Dimensions } from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

// FontSize
const loginTitleFontSize = 50;
const titleFontSize = 25;
const textFontSize = 16;
const buttonFontSize = 18;

// margin
const screenMargin = 16;
const headerMargin = 16;

// color
const appLightBackgroundColor = '#FFE8D6';
const appLightButtonColor = '#7C99AC';
const appLightButtonTextColor = '#FFFF';
const appLightTextColor = '#7C99AC';
const appLightError = '#D32F2F';

const appDarkBackgroundColor = '#121212';
const appDarkButtonColor = '#FFFFFF';
const appDarkButtonTextColor = '#121212';
const appDarkTextColor = '#FFFFFF';
const appDarkError = '#EF9A9A';

const lightColors = {
    background: appLightBackgroundColor,
    primary: appLightTextColor,
    text: appLightTextColor,
    switch: appLightBackgroundColor,
    button: appLightButtonColor,
    buttonText: appLightButtonTextColor,
    error: appLightError,
};

const darkColors = {
    background: appDarkBackgroundColor,
    primary: appDarkTextColor,
    text: appDarkTextColor,
    switch: appDarkBackgroundColor,
    button: appDarkButtonColor,
    buttonText: appDarkButtonTextColor,
    error: appDarkError,
};

export default {
    height,
    width,
    loginTitleFontSize,
    titleFontSize,
    textFontSize,
    buttonFontSize,
    screenMargin,
    headerMargin,
    appLightBackgroundColor,
    appLightButtonColor,
    appLightTextColor,
    lightColors,
    darkColors,
    screenWidth: width / 1.1,
}