
let arr = [1, 2, 3, 4, 5,6, 7, 8, 9, 10];
// console.log(arr);
document.getElementById("result").innerHTML = "[" + arr.join(", ") + "]";


// push method 
const pusharr = [1, 2, 3, 4, 5, 6];
document.getElementById("pusharr").innerHTML = "[" + pusharr.join(",") + "] " + " This is smiple array";
pusharr.push(7, 8);
console.log(pusharr);
document.getElementById("newpusharr").innerHTML = "[" + pusharr.join(",") + "] " + " This is push method array";

// Pop method remove the last element from an array and returns that element.
const poparr = [1, 2, 3, 4, 5, 6];
document.getElementById("Poparr").innerHTML = "[" + poparr.join(",") + "] " + " This is smiple array";
const newNumberArr = poparr.pop();
console.log(newNumberArr);
document.getElementById("newPopArr").innerHTML = "[" + poparr + "] " + " This is pop method array";





//include  method
// let includearr = ["chacha", "chachi",  "gagan ", "chutiya", "hai"];
// let isPresent = includearr.includes("gagan");
// console.log(isPresent,includearr); 
  