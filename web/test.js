
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

// var a=10;
// {
//     var a=-10;
// }
// let b =a;
// {
//     let b = -20;
// }
// console.log(b);

// a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000); 
// });

// // async function
// async function asyncFunc() {

//     // wait until the promise resolves 
//     let result = await promise; 

//     console.log(result);
//     console.log('hello');
// }

// // calling the async function
// asyncFunc();

// function find(arr, val) {
//     var result = []
//     for (var i = 0; i < arr.length; i++){
//             if (arr[i] === val) {
//                 result.push(i);
//             } 
//     }
//     return result;
// }
// find(['j', 'd','a', 'f', 'c', 'a', 'a', 'v'], 'a')

// function a(){
//     var b = 5;
//     function c(){
//          var d = 6;
         
//         function e(){
//             var f = 7;
            
//             function g(){
//                 console.log(b);
//                 console.log(d);
//                 console.log(f);
//             }
//             g();
//         } 
//         e();
        
//     }
//     c();
// }
// a();

// console.log("Start");
// setTimeout(() => {
//     console.log("Hello !!!!!");
// }, 5000);
// setTimeout(() => {
//     console.log("Amit");
// }, 0);
// console.log("End");

// const promise = new Promise(function (resolve, reject) {
//     const string1 = "geeksforgeeks";
//     const string2 = "geeksforgeeks";
//     if (string1 === string2) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
 
//   promise
//     .then(function () {
//       console.log("Promise resolved successfully");
//     })
//     .catch(function () {
//       console.log("Promise is rejected");
//     });


// console.log(" helli");
// let limit = 25;
// let sum = 60;
// var random = 2.77;
// for(let value = 1; value < limit; value= value+3){
//   console.log(random);
//   for(let j = 1; j<limit; j=j+2){
//     sum++;
//   }
//   console.log(sum);
// }

// class y {
//     constructor(id, name, age){
//         this.id = id;
//         this.name = name; 
//         this.age = age;
//     }
// }
// const x = new y(1, "amit", 22);
// console.log(x);


//  Call
// var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
// var person2 = {firstName: 'Kelly', lastName: 'King'};

// function say(greeting) {
//     console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
// }

// say.call(person1, 'Hello'); 
// say.call(person2, 'Hello'); 


// //  Apply
// var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
// var person2 = {firstName: 'Kelly', lastName: 'King'};

// function say(greeting) {
//     console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
// }

// say.apply(person1, ['Hello']); 
// say.apply(person2, ['Hello']);


// // Bind
// var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
// var person2 = {firstName: 'Kelly', lastName: 'King'};

// function say() {
//     console.log('Hello ' + this.firstName + ' ' + this.lastName);
// }

// var sayHelloJon = say.bind(person1);
// var sayHelloKelly = say.bind(person2);

// sayHelloJon(); 
// sayHelloKelly(); 

//  Higher Order Function

// function x(){
//     console.log("HEllo");
// }
// function y(x){
//     x();
// }

// Pure Function
// function calculateGST( productPrice ) {
//     return productPrice * 0.05;
// }
// calculateGST(12)


// Star Pattern
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     // printing spaces
//     for (let j = 0; j < n - i; j++) {
//         string += "";
//     }
//     // printing star
//     for (let k = 0; k < i; k++) {
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

//  OTP Generator
// function generateOTP(){
//     var digits = '0123456789';
//     let otp = "";
//     for(let i = 0; i < 6; i++){
//         otp += digits[Math.floor(Math.random() * 10)];
//     }
//     return otp;
// }
// console.log(generateOTP());
// function  time(am, pm){
//     let day = 12;
//     let night = 12
//     let min = 45;
//     let sec = 45

//     if(am <= day){
//         console.log(am +":"+min+":"+sec+"AM");
//     }
//     if(pm >= night) {
//         console.log(pm +":"+min+":"+sec+"PM");
//     } 
// }
// time(14,18)

// var arr=[3, 2, 3, 3, 2, 4, 9, 3, 2, 2];
// var rep_times = 1;
// var value_inc = 0;
// var item;
// for (var i=0; i<arr.length; i++)
// {
//         for (var j=i; j<arr.length; j++)
//         {
//                 if (arr[i] == arr[j])
//                 value_inc++;
//                 if (rep_times<value_inc)
//                 {
//                   rep_times=value_inc; 
//                   item = arr[i];
//                 }
//         }
//         value_inc = 0;
// }
// console.log(item+" : "+rep_times) ;

// var arr=[3, 2, 3, 3, 2, 4, 9, 3, 2, 2]
// const s = {};
// arr.forEach((x) =>{
//     s[x] = s[x] + 1 || 1;
//     // console.log(s[x]);

// })
// // console.log(s);
// let k = Object.keys(s);
// console.log(k);
// let v = Object.values(s);
// console.log(v);
// console.log(Object.keys(v));
// let max = Math.max(...v);
// console.log(max);

// let x = {id: 4, name: "Amit"}
// x.id = 41
// console.log(x);

// function area(length){
//     return function(height){
//         return function(weith){
//             return length * height* weith
//         }
//     }
// }
// area(4)(2)(5)

// function x(value){
//     console.log(value);
// }
// function y(z){
//     let a = "Hi " + z;
//     return a
// }
// let b = y("Amit");
// x(b);

// Find the average of largest and smallest numbers in an unsorted integer array?
// const array = [1,4,3,2];
//        let max = Math.max(...array);
//        let min = Math.min(...array);
//        let max_count = 0;
//        let min_count = 0;
//        for(let i = 0; i< array.length; i++){
//            if(array[i] == max){
//                max_count++;
//            }
//        }
//        for(let j = 0; j< array.length; j++){

//            if(array[j] == min){
//                min_count++;
//            }
//        }
//        let average = (max*max_count+min*min_count)/(min_count+max_count);
//        console.log(average);


// Find the counts of elements of an unsorted integer array which are equal to the average of all elements of that array.
// let arr = [ 1,3,2,4,5];
// let sum = 0;
// let map = new Map();
// for(let i=0; i<arr.length; i++){
//   sum += arr[i];
//   if(!map[arr[i]]){
//     map[arr[i]] =1;
//   }
//   else{
//     map[arr[i]] +=1;
//   }
// }
// let avg = sum/arr.length;
// console.log(map[avg]);
// let arr = [1, 5, 6, 8, 2, 4, 7, 3, 3];
// console.log(arr);
// let arr1 = arr.sort()
// let new_arr = []
// for(let i=0; i < arr1.length ; i++ ){
//     new_arr.push(arr1.length-1-i)
//     // console.log(arr1.length-1-i);
//     if(new_arr.length==arr1.length){
//         console.log(new_arr);
//     }
//         new_arr.push(arr1[i])
// }

// let a = "ajdiafd";
// var obj = "";


// function find(arr) {
// 	const count = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		const val = arr[i];
// 		if (val in count) {
// 			count[val] = count[val] + 1;
// 		} else {
// 			count[val] = 1;
// 		}
// 	}

// 	for (let key in count) {
// 		console.log(count[key] + ":" + key );
// 	}
// }
// find(["a","j","d","i","a","f","d"]);

// let arr = [1,2,3,4,5,6,7];
// let new_arr = []
// let new_arr1 = []
// for(let i = 0; i<arr.length; i++){
//     new_arr.push(arr[i]);
//     new_arr1.push(arr.length-i);

// }
// console.log(new_arr);
// console.log(new_arr1);

// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log(arr2.slice(-1));
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// Pending
// function myFunction(a, n) {
//    if(n === a[n]){
//     return a[n]
//    }


// }
// myFunction([1, 2, 3, 4, 5], 3)
// function myFunction(set, val) {
//    for(let i = 0; i<set.length; i++){
//     console.log(set[i]);
//     if(set[i] === val) {
//         return true;
//     }
//     else{
//         return false
//     }
//    }


// }
// myFunction(new Set([1, 2, 3]), 2)

// function myFunction(a, n){
// console.log(a.charAt(n-1)); 
// }
// myFunction('abcd',1)

// function myFunction(obj, key) {

//     console.log(obj[key]);
// }
// myFunction({ continent: 'Sweden', country: 'Japan' }, 'continent')


// function myFunction(a,b){
// console.log({[a]: b});
// }
// myFunction('z','x')

// function myFunction(a) {
// console.log(a.slice(0, a.length / 2));

// }
// myFunction('abcdefgh')



// function hhh(a, b){
//     a = a.filter(function(item) {
//         console.log( item !== b);
//     })
//     console.log(a)
// }
// hhh( [1, 2, 3, 4, 5, 3], 3)

// function myFunction(a, b) {
// var c = 0;
// for (var i = 0; i < b.length; i++) {
//     if (b.charAt(i) == a) {
//         c += 1;
//     }

// }
// return c;
// }
// console.log(myFunction('h', 'how many times does the character occur in this sentence?'));

// function myFunction(set, val){
//    let c = [""]
//    let a=  set.delete(val);


// }
// myFunction(new Set([1, 2, 3]), 1)

// function myFunction(a){
//     console.log(a.toFixed(2));
// }
// myFunction(2.12397)
// myFunction(3.136)
// myFunction(1.12397)

// ******** PENDING *************

// function myFunction(a, b){  

//         if(Object.keys(a) === b){
//             console.log('true');
//         }
//         else{
//             console.log('false');
//         }
//         console.log(Object.keys(a));
// }
// myFunction({a:1,b:2,c:3},'b')

// function find(a,b){
//     console.log(a[b-1]);
// }
// find([1,2,3,4,5], 2)

// function myFunction(a){

// var digits = a.toString().split('');
// console.log(digits);
// var realDigits = digits.map(Number)
// console.log(realDigits);

// }
// myFunction(10)

// function sum(a, b) {
// var res=0;
// var sort = a.sort(function (x, y) { return x - y })
// for (var i = 0; i < sort.length; i++) {
//     // console.log(sort[i]);
//     if (sort[i] > b) {
//         console.log(sort[i]);
//         let n = sort[i];
//         res += n


//     }
// }
// console.log(res);

// }
// sum([1, 2, 3, 4, 5], 2)

// function myFunction(arr){
//     var longestWord = "";
//     // console.log(longestWord);
//     arr.forEach(function(word) {
//       if(word.length > longestWord.length) {
//         // console.log(word.length);
//         console.log(longestWord.length);
//         longestWord = word;
//         // console.log(longestWord);
//       }
//     });

//     console.log(longestWord);
// }
// myFunction(['I', 'need', 'candy'])

// function myFunction(...arrays) {
//     let a = [];
//     arrays.forEach(ele => {
//         (a.push(...ele));
//      // console.log(ele);
//     })
//     console.log(a);
// }
// myFunction([1, 2, 3], [4, 5, 6])
// myFunction(['a', 'b', 'c'], [4, 5, 6])
// myFunction([true, true], [1, 2], ['a', 'b'])

// function checkPrime(number) {
//     for (var i = 2; i < number; i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   function myFunction(number) {
//     if (checkPrime(number)) {
//       return number;
//     } else {
//       while (checkPrime(number) === false) {
//         number++;
//       }
//     }
//     return number;
//   }

//   console.log(myFunction(38)); 
//   console.log(myFunction(7));
//   console.log(myFunction(115));
//   console.log(myFunction(2000)); 


// function  my(a,b){
//     let c = a.concat(b);
//     // console.log(c);
//     let uniqueChars = c.filter((d, index) => {
//         return c.indexOf(d) === index;
//     });
//     // console.log(uniqueChars);
//     console.log(uniqueChars.sort(function (x, y) { return x - y }));
// }
// my([1, 2, 3], [3, 4, 5]);
// my([-10, 22, 333, 42], [-11, 5, 22, 41, 42])  


// function my(arr) {
//     console.log(arr);
//     if (arr === arr) {

//         console.log("true");
//     }
//     else {
//         console.log("false");
//     }
// }
// my([true, true, true, true]);
// my(['10', 10, 10, 10]);
