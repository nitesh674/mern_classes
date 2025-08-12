function getUserdata(){
    return setTimeout(()=>{
        console.log("this is Day-14");
    },3000)
}

getUserdata();


// setTimeout(()=>{
//     document.getElementById("spanid").innerHTML = "Front-end Developer ...... color chnage";
//     let body = document.querySelector("body");
//     body.style.background = "red";
//     body.style.color = "white";
    
// },3000);



async function fetchData() {
    console.log("start");
    await getUserdata();
    console.log("End");
}
// fetchData();    


// promise
let Mypromis = new Promise((resolve, reject) => {
    let data = true;
    if(data){
        resolve("this is promise Resolve");
    }
    else{
        reject("this is promise Rejcts");
    }
});

Mypromis.then(()=>{
    console.log("this is call the try section");
}).catch(()=>{
    console.log("this is call the catch section");
});

