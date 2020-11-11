//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, time) => {
  const rounded = (number) => {
    return Number((number).toFixed(2)); 
   }
  const earthYears = (time/60/60/24/365.25)
  if (planet === 'earth') {
    return rounded(earthYears);
  } 
  if (planet === 'mercury') {
    const mercuryYears = (earthYears/0.2408467);
    return rounded(mercuryYears);
  } 
  if (planet === 'venus') {
    const venusYears = (earthYears/0.61519726);
    return rounded(venusYears);
  } 
  if (planet === 'mars') {
    const marsYears = (earthYears/1.8808158);
    return rounded(marsYears);
  } 
  if (planet === 'jupiter') {
    const jupiterYears = (earthYears/11.862615);
    return rounded(jupiterYears);
  } 
  if (planet === 'saturn') {
    const saturnYears = (earthYears/29.447498);
    return rounded(saturnYears);
  } 
  if (planet === 'uranus') {
    const uranusYears = (earthYears/84.016846);
    return rounded(uranusYears);
  } 
  if (planet === 'neptune') {
    const neptuneYears = (earthYears/164.79132);
    return rounded(neptuneYears);
  }
};
