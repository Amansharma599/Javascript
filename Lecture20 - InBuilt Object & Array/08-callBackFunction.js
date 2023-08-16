// Searching on Objects 
let objArray = [
    {
        No : 1,
        Name : 'Aman'
    }
    ,
    {
        No : 2,
        Name : 'Sharma'
    }
]

console.log(objArray); 

console.log(objArray.includes({No:1,Name:"Priyansh "})); //present but false

// For this we use callback function 
let obj = objArray.find((obj) => obj.Name === "Priyansh");
console.log(obj);