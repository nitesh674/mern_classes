function headleSubmit(){
    // e.preventDefault()
    console.log("this txt");
}

    let btn = document.getElementById("btn");
    let main = document.querySelector("body");
    let isDark = false;

    btn.addEventListener("click",()=>{
        if(!isDark){
            main.style.background = "black";
            main.style.color = "white";
            isDark = true;
        }
        else{
            main.style.background = "white";
            main.style.color = "black";
            isDark = false;
        }
    })