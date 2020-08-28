//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]


export const decodedValue = (resistorValues) => {
  const firstColor = COLORS.indexOf(resistorValues[0]).toString();
  const secondColor = COLORS.indexOf(resistorValues[1]).toString();

  return  parseInt(firstColor + secondColor); 


};
