const drawingInConsole = (n) => {
  let param = n;
  let space = 0;

  for (let i = 0; i < param; i+=2) {
      console.log(' '.repeat(space++).concat('*'.repeat(n)));
      n -= 2;
  }
}

drawingInConsole(5);