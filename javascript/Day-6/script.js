//fiill method
let arr = [1, 2, 3, 4, 5];
arr.fill(0,4);
// console.log(arr);


// concat method
let arr2 = [6, 7, 8];
let newArr = arr.concat(arr2);
// console.log(newArr);


// flat array

let Flatarr = [1, 2, [3, 4], [5, 6]];
let newflatarr = Flatarr.flat();
console.log(newflatarr);