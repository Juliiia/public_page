const basicFontSize = 16;

const size = {
    xxs: '300px',
    xs: '400px', // for small screen mobile
    sm: '600px', // for mobile screen
    md: '900px', // for tablets
    lg: '1280px', // for laptops
    xl: '1440px', // for desktop / monitors
    xxl: '1920px', // for big screens
  }

export default {
    // screen size
    miniScreens: size.xxs,
    mobileScreenSize: size.xs,
    tabletScreenSize: size.md,
    laptopScreenSize: size.lg,
    monitorScreenSize: size.xl,

    // dimensions
    maxPageWidthDefault: '800px',
    maxPageWidthLarge: '1200px',
    sectionMaxWidthDefault: '800px',

    // font sizes
    fontSizeText: `${basicFontSize}px`,
    fontSizeSectionTitle: `${basicFontSize + 15}px`,
    fontSizeSubSectionTitle: `${basicFontSize + 3}px`,
    fontSizeBigText: `${basicFontSize + 15}px`,
    fontSizeSmallText: `${basicFontSize - 3}px`,

    // color
    mainOrange: '#e29851', //#D29A7F
    defaultTextColor: '#000000',

    darkBlue: '#3E5872',

    transparentWithe: "rgba(255, 255, 255, 0.9)",
}