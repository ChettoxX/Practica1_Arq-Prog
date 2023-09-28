function findMultiplos(num: number):number[] {
    const multiplos: number[] = [];
  
    for (let i = 0; i <= num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        multiplos.push(i);
      }
    }
  
    return multiplos;
  }
  
  const inputNum = 20; // Cambia este número por el que desees
  const resultado = findMultiplos(inputNum);
  console.log(resultado);
  