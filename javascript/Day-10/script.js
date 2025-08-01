

let container = document.getElementById("container");
console.log(container);

container.innerHTML = "<h1>Welcome to Day-10</h1>";
container.innerHTML += "<span style='font-size:40px; color:red;'>John Doe</span>";

container.style.background = "lightblue";
container.style.padding = "20px";

let textElements = document.getElementsByClassName("text");
let convertArr = Array.from(textElements);
console.log(convertArr);

convertArr.forEach((item,i)=>{
    if(i == 2){
        console.log("This is the third item");
        item.style.color = "red";
        item.style.fontSize = "20px";
        item.innerHTML = "This is a modified text";
        return ""
    }
    console.log(item);
    item.style.color = "green";
    item.style.fontSize = "20px";
    item.innerHTML = "This is a modified text";
})
