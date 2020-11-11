//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, time) => {
  const earthYears = (time/60/60/24/365.25)
    if (planet === 'earth') {
      return Number((earthYears).toFixed(2));
    } 
    if (planet === 'mercury') {
      const mercuryYears = (earthYears/0.2408467);
        return Number((mercuryYears).toFixed(2));
    } 
    if (planet === 'venus') {
      const venusYears = (earthYears/0.61519726);
        return Number((venusYears).toFixed(2));
    } 
    if (planet === 'mars') {
      const marsYears = (earthYears/1.8808158);
        return Number((marsYears).toFixed(2));
    } 
    if (planet === 'jupiter') {
      const jupiterYears = (earthYears/11.862615);
        return Number((jupiterYears).toFixed(2));
    } 
    if (planet === 'saturn') {
      const saturnYears = (earthYears/29.447498);
        return Number((saturnYears).toFixed(2));
    } 
    if (planet === 'uranus') {
      const uranusYears = (earthYears/84.016846);
        return Number((uranusYears).toFixed(2));
    } 
    if (planet === 'neptune') {
      const neptuneYears = (earthYears/164.79132);
        return Number((neptuneYears).toFixed(2));
    }    
};
