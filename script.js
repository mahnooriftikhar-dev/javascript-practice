// // console.log(`I love myself`);
// // console.log(`haha Happy after writing Javascript`);

// // // window.alert(`oho So you see my website!!!`);
// // // window.alert(`I am  SO in love with it`);

// // document.getElementById("mano").textContent= `Hello Mahnoor`;
// // document.getElementById("noor").textContent="What's up Mahnoor Iftikhar!";

// // let x; //Declaration
// // x = 10; //Assigmeent 
// // let y;
// // y = "you are Mahnoor Iftikhar "
// // let mano = true;
// // console.log(mano)
// // console.log(y);
// // console.log(x);
// // let noor = `Mahnoor Iftikhar`;
// // console.log(`Your name is ${noor}`);
// // // thats becasue of template literals okay no "" '' 

// // // lets use operators okay

// // let students;
// // students = 10;
// // students--;
// // console.log(students+=9);

// // let username; // declaration
// // username = window.prompt(`enter`);
// // console.log(username);

// // let username;
// // document.getElementById(`submit`).onclick = function(){
// //     username= document.getElementById(`userid`).value;
// //     document.getElementById(`user`).textContent= `Welcome ${username}`
// //     console.log(username);
// // }
// // let username //global scope
// // document.getElementById(`submit`).onclick = function(){
// //     username= document.getElementById(`userid`).value;
// //     document.getElementById(`user`).textContent=`welcome ${username}`

// // }
// //type conversion 
// // let x = "0";
// // x = Number(x);

// // console.log(x,typeof 

// // const pi = 3.14;
// // let radius;
// // let circumference;

// // radius = window.prompt(`please enter the radius value`);
// // //forst have to do type conversion otherwise it will save it as string
// // radius = Number(radius);

// // circumference = 2 * pi * radius;
// // console.log(circumference);
// // const pi = 3.14;
// // let radius;
// // let circumference;
// // document.getElementById('submit').onclick= function(){
// //     radius  =  document.getElementById('rad').value;
// //     circumference = 2 * pi * radius;
// //     circumference=document.getElementById('result').textContent = `So circumference is ${circumference}`;
// // }

// // // Ternary operator
// // let age = 14;
// // let message;
// //  message=age > 13 ?"You are old":"You are not old enough";

// // console.log(message);
// // let card = "MasterCard";
// // let SelectCard;
// // SelectCard = card = "MasterCard" ? "You are using MasterCard":"Please Select MasterCard";
// // console.log(SelectCard);
// // let userid = "Mano ";
// // let displayname;
// //  displayname = userid=== "Mahnoor" ? "You can enter this site":"You are not allowed to enter this site";
// //  console.log(displayname);
// //Of course I did a mistake again I forget to remove Quotes around it in console.log;


// let varName = "saeed";

// switch (varName)
// {
//    case "Alishba":
//    case "Sara":
//    case "larry":
//        alert('Hey');
//        break;

//    default:
//        alert('Default case');
//        break;
// }

// let day = 1;
// switch(day){
//     case 1 :
//     console.log('So yeah its Monday');
// }

// let score = Number(60);
// let testscore;

// switch (true) {
//     case score > 44:
//         testscore = 'A';
//         break;

//     default:
//         testscore = 'Fail';
// }

// console.log(testscore);

// String Slicing
// let username = "Mahnoor Iftikhar";
// username = username.slice("0", "6");
// console.log(username);

// let weather =false;
// if(!weather){
//     console.log("Weather is sunny");

// }
// else{
//     console.log("its not sunny");
// }

// function studentname(){
//     console.log("mahoor")
// }
// studentname();
// function sayHello() {
//   console.log("Hello!");
// }

// sayHello(); // calling the function
// function

// function add(a,b){
//   return a+b;
// }
// let result = add(5,90);
// console.log(result);

//reverse an array
// let namesofstudents = ["Mahnoor", "Mano", "Noor"];
// for(i = namesofstudents.length-1; i >= 0; i--  ){
//     console.log(namesofstudents[i]);
// }
// // spreadoperator
// let noname = [1, 2, 0];
// let numbername =[...noname];
// console.log(numbername);
// let numbers = [1, 2, 3];
// let newNumbers = [...numbers];
// console.log(newNumbers);
// callback
// function greet(name){
//     console.log(" Hello Dear " + name);
// }
// function  passname(cb){
//     let sample = "Mahnoor Iftikhar";
//     cb(sample);

// }
// passname(greet);
// callback is a function in which the whole function is passes as an argument in other function
// let names=["mano", "mano"];
// names.forEach(function(girlname){
//     console.log(girlname);
// })
//map function also change every element of array but the main diiffernce is that it creates a new array from the old array.
// let number = [1,2,3];
// let multiply_no = number.map(function(result){
//     return result*2;
// })
// console.log(multiply_no);
// reduce an array that reduce all the values of an array into a single value 
// //function expression storing a function in a variable like string and numbers are stored inside a variabel right
// let myname = function(mamname){
//     console.log(`Mahnoor`);
// }
// myname();

