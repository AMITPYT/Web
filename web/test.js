
// function rotated(d,arrs){
//     for(let i = 0; i<d; i++){
//        let shifted= arrs.shift()
//        arrs.push(shifted)
//     }
//     console.log(arrs);
//     return arrs
// }

// rotated(2,[1,2,3,4,5])


// function missing(arr) {
//     var x = 0;
//     for (var i = 0; i < arr.length; i++) {
//         x = x + 1;
//         if (arr[i] != x) {
//             return(x);
//         }
//     }
// }
// missing([1, 2, 3, 4, 5, 6, 7, 8, 10])

// a = 3;
// console.log(a);
// var a;

// function durationformat(sec){
//     return;
// }
// console.log(myFunction(62));
// console.log(myFunction(120));
// console.log(myFunction(3362));


// ********************For Reverseing the array*********************8
// function reverse (arr){

//     const rev = (arr) => parseInt(String(arr)
//     .split("").reverse().join(""),10);
//     var ee = rev(arr)
//     console.log(ee);

// }
// reverse([123456])

// **************Odd and Even****************
// function oddEven(num){    
//     if (num % 2 == 0){
//         console.log("even " + num);
//     }
//     else{
//         console.log("odd " + num);
//     }
// }
// oddEven(6)


// function addTailValue(value){
//         let a = value;
//         a.unshift(141);
//         a.push(121);
//         console.log(a);

// }
// addTailValue([])

// ***********ForEach Loop******************* 
// const arr = [1,2,3,4,5]
// arr.forEach(function(element){
//         console.log(element);
// });

// ********Closure*******

// function x(){
//         var a = 5;
//         function y(){
//                 console.log(a);
//         }
//         y();
// }
// x();

// *********Hoisting****

// a = 5;
// console.log(a);
// var a;


// ******** Array print and Filter above 18 *********

// const arr = [15,18,12,25,45,10,55]
// for(let i = 0 ; i < arr.length; i++){
//         let res = arr[i]
//         console.log(res);
// }
// console.log("Filter");
// const array = arr.filter(element => element >= 18)
// array.forEach(function(ele){ 
//         console.log(ele);
// })

// what the Output

// (function(x){
//         return (function (y){
//                 console.log(x);
//         })(2)
// })(1);;

// ****CallBack Function******
// function res(value){
//         console.log(value);
// }
// function s(x){
//         let name = "Hi I am " + x;
//         return name
// }
// let result = s("Amit")
// // console.log(result);
// res(result);

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);

// console.log("Start");
// function a (){
//     setTimeout(function(){
//         console.log("middle");
//     },3000) 
// }
// a();
// console.log("End");

// const a = true;
// let pro = new Promise(function(resolve, reject){
//     if(a){
//         resolve('Resolve');
//     }else{
//         reject("Reject");
//     }
// });
// console.log(pro);

// let a = '123';
// let b = parseInt(a);
// console.log(typeof(b));

// var a = 1;
// while(a <= 10){
//     console.log(a);
//     a++;
// }

// var a = 11;
// do {
//     console.log(a);
//     a++;

// } while (a <= 30)   

// const a = [1,2,3,4,5];
// for(let i = 0; i < a.length; i++){
//     let c = a[i]
//     console.log(c);
//     let b = c.reverse();
//     console.log(b);
// }
 
// var count = {
//     country: "India",
//     State: "Punjab",
//     Name: "Amit",
//     fullAdd: function(){
//         return "My name is "+ this.Name + " I live in " + this.State + " "+ this.country;
//     }
// };
// var fetch = count.fullAdd();
// console.log(fetch);
