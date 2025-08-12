// Scope - Function scope , global scope and block scope


// Function scope - Function ke under hi use ho sakti hai 
function abc(){
    var a = 12;
}
// Globle scope - poore code me kahi bhi use ho sakti hai
var  a = 12;
// Block scope - {} curly braces main hi use ho sakti ho.
{
    a = 12;
}

// Execution & Memory context

/* js sabse pahle jaise hi apka function dekhta hai sabse
   pahle js banata hai execution context , ye ek process hai jo 
   ki do different phases main chalta hai, memmory phases and 
   execution phase .
*/

// lexical & dynamic scoping

/* lexical Scoping -> ki aap kaha par physically 
   availble ho ye poori tareeke se depend kar tha hai 
   ki aap kya access kro paaoge
*/
// function abc(){
//     let a = "text";
//     function xyz(){
//         console.log(a);
//     }
//     xyz();
// }
// abc();

/* dynamic Scoping ->  kaha se call kar rhe ho ye depend karega ki 
    ki kya value milegi 
*/ 


function abc(){
    let a = 122;
}

function xyz(){
    let a = 2344;
    abc();
    // console.log(a);
}
xyz();