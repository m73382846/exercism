//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  let result;  
  if (Number.isInteger(year/4)) {
    if (Number.isInteger(year/100)) {
      
      if (Number.isInteger(year/400)) {
        result = true;
      } else {
        result = false;
      }
    } else {
      result = true;
    }
  } else {
    result = false;
  };
  return result; 
};
