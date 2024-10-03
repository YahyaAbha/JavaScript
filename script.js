// const student = {
//     fullName : "Yahya Qasim",
//     age : 22,
//     rating : 0.1,
//     class : 6,
// };


// if else statement

// let mode = "dark";
// let color;
// if( mode === "dark"){
//     color="dark";
// } else{
//     color ="light";
// }
// console.log(color);

// let student = 18;
// if ( student>=22){
//     console.log("Vote")
// } else{
//     console.log("Not Vote");
// }

// let num = 24;
// if (num/2 === 0){
//     console.log(num, "is even")
// }else{
//     console.log(num, "is odd")
// }


// else if istatement


// let a = 80;
// let b;
// if ( a === 20){
//     b = "You can not apply";
// } else if ( a === 40){
//     b = "You can not apply";
// } else if ( a === 60){
//     b = "You can not apply";
// } else if ( a > 70){
//     b = "You can apply";
// } 
// console.log(b)


// exersise

// let num = prompt("Age");
// let age = num;
// if(age >= 18 ){
//     console.log("You can apply for CNIC");
// } else {
//     console.log("You can not apply for CNIC")
// }


// let percentage = prompt("Enter your percentage");

// if( percentage >=90 && percentage  <= 100 ){
//     console.log("A");
// } else if(percentage >=70 && percentage <= 89){
//     console.log("B");
// } else if(percentage >=60 && percentage <= 69){
//     console.log("C");
// } else if(percentage >=50 && percentage <= 59){
//     console.log("D");
// } else if(percentage >=30 && percentage <= 49){
//     console.log("F");
// } else {
//     console.log("Fail")
// }


// sum = 0;
// for (i = 1; i<= 5; i++){
//     sum = sum + i;
// }
// console.log(sum);

// ifinite loop

// for (let i =1; i>=0 ; i++ ){
//     console.log(i);
    
// }


// while loop
// let i = 6  
// while(i>=5){
//     console.log(i);
//     i++;
// }


// do while loop

// let a = 1;
// do{
//     console.log(a);
//     a++;
// } while( a <= 25);


// how to change capital to small by charcode

// flavour = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi beatae provident esse!'
// var a = flavour.charCodeAt(0)
// console.log(a)
// console.log(String.fromCharCode(a+32))


// for(i=0; i<flavour.length; i++){
//     var a = (flavour.charCodeAt(i))
//     console.log(String.fromCharCode(a+32))
// }


// var a = ''
// for (var i = 0; i < flavour.length; i++) {
//     a += flavour[i] // Lorem
//     if (flavour.charCodeAt(i) == 32) {
//         console.log(a)
//         a = ''
//     }
// }

// console.log(flavour.toLowerCase())



var a = prompt("Enter your name");
var z = a.charAt(0);

var caps = z.toUpperCase() + a.slice(1);
console.log(caps);


