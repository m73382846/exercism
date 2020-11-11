//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, time) => {
  let years = (time/60/60/24/365.25)
    if (planet === 'earth') {
      return Number((years).toFixed(2));
    } if (planet === 'mercury') {
      let years = (time/60/60/24/365.25/0.2408467);
        return Number((years).toFixed(2));
    } if (planet === 'venus') {
      let years = (time/60/60/24/365.25/0.61519726);
        return Number((years).toFixed(2));
    } if (planet === 'mars') {
      let years = (time/60/60/24/365.25/1.8808158);
        return Number((years).toFixed(2));
    } if (planet === 'jupiter') {
      let years = (time/60/60/24/365.25/11.862615);
        return Number((years).toFixed(2));
    } if (planet === 'saturn') {
      let years = (time/60/60/24/365.25/29.447498);
        return Number((years).toFixed(2));
    } if (planet === 'uranus') {
      let years = (time/60/60/24/365.25/84.016846);
        return Number((years).toFixed(2));
    } if (planet === 'neptune') {
      let years = (time/60/60/24/365.25/164.79132);
        return Number((years).toFixed(2));
    }    
};
