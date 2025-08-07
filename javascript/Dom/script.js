
var a = document.querySelector("h1");
console.log(a);

// 1
var mytext = document.getElementById("myPar");
mytext.innerHTML = "this is modify text";
console.log(mytext);

// 2 
let colorbox = document.getElementsByClassName("box");
let convertbox = Array.from(colorbox);
console.log(convertbox);
convertbox.forEach((item , i)=>{
    item.style.background = "red";
    item.style.color = "white";
})

for (let colorbox of convertbox){
    colorbox.style.background = "green";
}


// 3 
let txtcolor = document.querySelector("h3");
txtcolor.style.color = "blue"

// Level 2 – Intermediate Practice

// 2.1
function hideMe(){
    let box = document.getElementById("box");
    // let box = document.querySelector("#box");
    // box.style.display = "none";
       let btn = event.target;

       if(box.style.display === "none"){
        box.style.display = "block";
          btn.textContent = "Hide Me" ;
       }
       else{
        box.style.display = "none";
          btn.textContent = "Show Me";
          box.style.background = "green";
       }
}

//2.2

let Ccolor = document.getElementsByClassName("item");
textConvert = Array.from(Ccolor);
textConvert.forEach(element => {
   element.style.color = "red";
   console.log(element);   
});

//2.3

let txtPra = document.querySelectorAll("p");
newpar = Array.from(txtPra);
newpar.forEach((item)=>{
    item.style.color = "blue";
})