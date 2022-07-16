const size = {
  mobileS: "20em", //320
  mobileM: "23.4375em", //375
  mobileL: "26.5625em", //425
  tabletS: "37.5em", //600
  tablet: "48em", //768
  laptop: "64em", //1024
  desktop: "90em", //1440
};

const Device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default Device;
