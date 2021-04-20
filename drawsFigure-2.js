const drawingInConsole = (n) => {
  let param = n;
  let space = 0;
  let arr =[]

  for (let i = 0; i < param; i+=2) {
      arr.unshift(' '.repeat(space++).concat('*'.repeat(n)));
      n -= 2;
  }

  let reverseArr = [].concat(arr).reverse().slice(1);
  
  arr.concat(reverseArr).map(i => console.log(i))
}

drawingInConsole(15);
