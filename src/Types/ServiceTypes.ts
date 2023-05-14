export enum ServiceTypes {
    Ignitis = 'Ignitis',
    Sileja = 'Sileja',
    SilumosTinklai = 'Silumos tinklai',
    Telia = 'Telia',
    VilniausVandenys = 'Vilniaus vandenys',
  };

  export const ServiceSubTypes = {
    [ServiceTypes.Ignitis]: ['Electricity day', 'Electricity night', 'Electricity common'],
    [ServiceTypes.Sileja]: ['Sileja'],
    [ServiceTypes.SilumosTinklai]: ['Siluma bendras', 'Karstas vanduo', 'Siluma namai'],
    [ServiceTypes.Telia]: ['Internetas'],
    [ServiceTypes.VilniausVandenys]: ['Vanduo'],
    // Add the other service types and their subtypes here...
  };