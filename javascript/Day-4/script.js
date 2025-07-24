
// filter method 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let  evenNumber = [];
let output = "";
numbers.filter((arr)=>{
    if(arr % 2 === 0 ){
        evenNumber.push(arr);
        console.log("This is evenNumber" + arr);
        output += "This is evenNumber" + arr + "<br>";
    }
    else if(arr % 2 !== 0 ){
        evenNumber.push(arr);
        console.log("This is oddNumber " + arr);
        output += "This is oddNumber " + arr + "<br>" ;
    }
});


output += "<br><strong>This is evenNumber array:</strong> " + evenNumber.join(", ");

document.getElementById("result").innerHTML = output;
console.log("This is evenNumber " + evenNumber);

// map method
let mapArr = ["apple", "banana", "cherry", "date"];
let mapOutput = "";
mapArr.map((item)=>{
    console.log("This is a fruit: " + item);
    mapOutput += "This is a fruit: " + item + "<br>";
});

document.getElementById("result").innerHTML += "<br><strong>Fruits:</strong> " + mapOutput;