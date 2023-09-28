const num: number[] = [2,34,33,14,32,10];
export const quickSort = (num: number[]): number[] => {

  if (num.length == 0) return []; 
  const mayores: number[] = []; 
  const menores: number[] = [];
  const exit: number[] = [];

  for (let i: number = 1; i < num.length; i++) { 
    if (num[0] > num[i]) {
      menores.push(num[i]);
    } else {
      mayores.push(num[i]);
    }
  }

  return exit.concat(quickSort(mayores)).concat(num[0]).concat(
    quickSort(menores),
  ); 
};

console.log(quickSort(num));
  
