const size = {
  mobileS: "20em", //320
  mobileM: "23.4375em", //375
  mobileL: "26.5625em", //425
  tabletS: "37.5em", //600
  tabletM: "42.5em", //680
  tablet: "48em", //768
  laptopS: "56em", //896
  laptop: "64em", //1024
  desktop: "90em", //1440
};

const Device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tabletS: `(min-width: ${size.tabletS})`,
  tabletM: `(min-width: ${size.tabletM})`,
  tablet: `(min-width: ${size.tablet})`,
  laptopS: `(min-width: ${size.laptopS})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default Device;
