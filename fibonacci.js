const fibonacci = (num) => {
    let arr = [1, 1];

    for(let i = 2; i <= num; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }

    return arr[arr.length - 1];
}

console.log(fibonacci(12));