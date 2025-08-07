let inputbtn = document.getElementById("inputbtn");

inputbtn.addEventListener("change",(e)=>{
    console.log(e);
    console.log("Hello");
    console.log(e.target.value)
})
inputbtn.addEventListener("input",(e)=>{
    console.log(e);
    console.log("Hello");
    console.log(e.target.value)
})

console.log("start");

