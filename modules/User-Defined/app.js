function greet(){
    console.log("hello ");
    
}
let arr = ["string",false,124 ];

let object = {
    name: "abc",
    age: 22
};
let str =  "Atul Pratap Singh";

function printName(){
    console.log("name");
    
}


// first way of exporting
module.exports= greet;
module.exports = arr;
module.exports = object;

// using this format ==> this will consider the last export statement

// module.exports ={
//     greet,
//     arr,
//     object,
//     str,
//     printName,
// // }
// exporting ==> wrapping
// importing ==> unwrapping

// ! 2nd way of exporting ==>

    // exports.greet= () => {
    //     console.log("hello");
    //     return "end";
        

    // };
    // exports.myName ="something";
    // exports.object = {key:"value"}