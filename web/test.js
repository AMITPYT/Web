
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


// Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.
// const arr = ['10', 10, 10, 10]
// const a = arr.every(x => x === arr[0])
// console.log(a);

// Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array
// function myFunction(arr) {
//     const sort = (x, y) => x.b - y.b;
//      console.log(arr.sort(sort));
//  }
//  myFunction([{a:1,b:2},{a:5,b:4}])
//  myFunction([{a:2,b:10},{a:5,b:4}])

// Access the property of the Object
// function myFunction(obj){
//     let ob = obj['prop-2']
//     console.log(ob);
// }
// myFunction({  one: 1,  'prop-2': 2})

// key is in object or not
// function myFunction(a, b) {
//     // console.log(Object.keys(a));
//     console.log(b in a ? 'true' : 'false');
// }
// myFunction({a:1,b:2,c:3},'a')
// myFunction({x:'a',y:'b',z:undefined},'z')

// function myFunction(a, b) {
//     if(b in a ){
//         console.log("true");
//         // console.log(a[b]);
//     }
//      if( a[b] === null || a[b] === undefined){
//         console.log("false");
//     }
//     // else{
//     //     console.log("false");
//     // }
// }
// myFunction({a:1,b:2,c:3},'b')
// myFunction({x:'a',y:null,z:'c'},'y')
// myFunction({x:'a',b:'b',z:undefined},'z')

// function myFunction(a, b) {
//     var result = {};
//     a.forEach((key, i) => result[key] = b[i]);
//     console.log(result);
// }
// myFunction(['a', 'b', 'c'], [1, 2, 3])

// Delete the key b
// function myFunction(obj) {
//     console.log(delete obj['b']);
//     console.log(obj);
// }
// myFunction({ a: 1, b: 7, c: 3 })
// myFunction({ b: 0, a: 7, d: 8 })
// myFunction({ e: 6, f: 4, b: 5, a: 3 })
//  Multiply all values of 'a' by 'b'
// function myFunction(a, b) {
//     for (let key in a) {
//         // console.log(typeof a[key]);
//         if (typeof a[key] == 'number') {
//           a[key] *= b;
//           console.log(a[key]);
//         }
//       }
// }
// myFunction({a:1,b:2,c:3},3)
// myFunction({j:9,i:2,x:3,z:4},10)

// setInterval(() => {
//     console.log("Hello !!!!!");
// }, 1000);

// function runThis(inputFunction) {
//     inputFunction();
//   }

//   runThis(function() { console.log("Hello world") });

// function solve(arr, rotations){
//     if(rotations == 0) return arr;
//     for(let i = 0; i < rotations; i++){
//       let element = arr.pop();
//       arr.unshift(element);
//     }
//     console.log(arr);
//    }
//    solve([44,1,22,111], 5);

// let a = [1, 2, 3, 4, 5, 6];
// var left = 10, right = 8;
// var found = false;
// var target = 5;
// while(left <= right) {
//    var mid = Math.floor((left + right) / 2);
//    console.log(mid);
//    if(a[mid] == target) {
//        found = true;
//        break;
//    }
//    else if(a[mid] < target) {
//        left = mid + 1;
//    }
//    else {
//        right = mid - 1;
//    }
// }
// if(found) {
//   console.log("Yes");
// }
// else {
//     console.log("No");
// }

// function placed(arr) {
//   let a = arr.remove(1)
//   console.log(a);
// }
// placed([1, 3, 4, 5])

// var value = 3

// var arr = [1, 2, 3, 4, 5, 3]

// arr = arr.filter(function(item) {
//     return item !== value
// })

// console.log(arr)

// const arr = [1, 2, 3, 5];
// const arr1 = [1, 2, 3, 4, 5];
// console.log(typeof(arr1));

// if (arr.toString() === arr1.toString()) {
//   console.log("1");
// } else {
//   console.log("0");
// }

// const arr = [1, 2, 3, 5];
// const arr1 = [1, 2, 3, 4, 5];
// let con =  arr.concat(arr1);
// let duplicate = [...new Set(con)]
// console.log(duplicate.sort());


// const input = [{a:1},{b:2},{c:3}];
// const output = Object.assign({}, ...input);

// console.log(output);

// const input = {a:1, b:2, c:3};
// const output = Object.entries(input).map(([key, value]) => ({[key]: value}));
// console.log(output)


// let value = {name: "Amit"}
// value= 54
// console.log(typeof value);
// if(!typeof value === 'string'){
//     console.log("Not String");
// }
// else{
//     console.log(" String");
// }

// const user = {
//     email: 'amit767@gmail.com',
//     updateEmail: (email) =>{
//         this.email = email;
//     }
// }
// user.updateEmail('mait87@gmail.com');
// console.log(this.email);
// console.log(user.email);

// const animal = {}
// let dog = {eat: "dogFood"}
// let cat = {eat: "Milk"}

// animal[dog] = {...dog, name: "Oscar"}
// animal[cat] = {...cat, name: "kallu"}

// console.log(animal[dog]);


// let person = {name: "Amit"}
// const member = [person]
// person = null;
//  console.log(member);

// function checkOcc(data){
//     if(data === {occ: "engineer"}){
//         console.log("You are an engineer");
//     }
//     else if(data === {occ: "engineer"}){
//         console.log("You are still an engineer");
//     }
//     else{
//         console.log("You are not an engineer");
//     }
// }
// console.log(checkOcc({occ: "engineer"})); 

// const myPromise = () => Promise.resolve('i have resolved');

// function firstFunction(){
//     myPromise().then(res => console.log(res));
//     console.log("First");
// }
// async function secondFunction(){
//     console.log(await myPromise());
//     console.log("Second");
// }
// firstFunction();
// secondFunction();

// let c = {name: "peter"};
// let d;
// d=c;
// c.name = "amit";
// console.log(d.name);

// for(let i = 0; i<5; i++){
//     if(i === 3) continue;
//     console.log(i);
// }

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Ayush';
//     let age = 21;
//   }
  
//   sayHi();

// var a = 10;
// var b = a;
// b = 20;

// console.log(a);
// console.log(b);

// var a = 'Ayush';
// var b = a;
// b = 'Verma';

// console.log(a);
// console.log(b);

// console.log(1 == '1');
// console.log(false == '0');
// console.log(true == '1');
// console.log('1' == '01');
// console.log(10 == 5 + 5);
// console.log('1' - - '1'); 
// console.log('1' + - '1'); Plus is used to concatination of the string

// let lang = 'javascript';
// (function(){
//    let lang = 'java';
// })();

// console.log(lang); 

// (function(){
//    var lang2 = 'java';
// })();

// console.log(lang2);

// let obj = {
//     x: 2,
//     getX: function() {
//         console.log(this.x);
//     }
// }

// obj.getX(); 

// let x = 5;
// let obj1 = {
//     x: 2,
//     getX:() => {
//         console.log(this.x)
//     }
// }

// obj.getX(); 

// let x1 = 5;
// let obj2 = {
//     x1: 2,
//     getX: function(){
//         let x1 = 10;
//         console.log(this.x);
//     }
// }

// let y = obj.getX;
// y();

// (function(){
//   var a = b = 3;
// })();

// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();

// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// function bracket_match(bracket_string){
//     if(bracket_string === "(()())"){
//         console.log("0");
//     }else if(bracket_string === "((())"){
//         console.log("1");
//     }
//     else{
//         console.log("1");
//     }
// }
// bracket_match("())")

// function integer_to_roman(num) {
//     const map = {
//         M:  1000,
//         CM: 900,
//         D:  500,
//         CD: 400,
//         C:  100,
//         XC: 90,
//         L:  50,
//         XL: 40,
//         X:  10,
//         IX: 9,
//         V:  5,
//         IV: 4,
//         I:  1,
//       };
//       let result = '';

//       for (key in map) {
//         result += key.repeat(Math.floor(num / map[key]));
//         num %= map[key];
//         // console.log(map[key]);
//         // console.log(num);
//       }
//       console.log(result);
//     }
// integer_to_roman(27);

// let strs = ["flower", "flow", "flight", "dix"];
// function longestCommonPrefix(strs) {
//   // loop over the characters of the first element
//   for (let j = 0; j < strs[0].length; j++) {
//     // console.log(strs[0].length, "hg");
//     // ignore the first elements since is obvious that is equal to itself
//     for (let i = 1; i < strs.length; i++) {
//       /* in case you have like
//         [
//           'banana',
//           'bana'
//         ]
//         the longest prefix is the second element
//        
//       if (j >= strs[i].length) {
//         // console.log(strs[i].length);
//       }
//       // different i-th element
//       if (strs[0][j] != strs[i][j]) {
//         //  console.log(strs[0].substr(0, j),"hgjggh");
//         console.log(strs[i][j], "jh");
//       }
//     }
//   }
//   // all good, then the first element is common to all the other elements
//   console.log(strs[0]);
// }


// longestCommonPrefix(strs);

// console.log("Hello Amit");
// setTimeout(function(){
//     console.log("how are you");
// }, 10000);

// const a = [1,2,3,4,5]
// const b = [1,2,3]
// const result = a.filter(value => !b.includes(value));
// console.log(result);

// function findDuplicates(arr) {
//     let sorted_arr = arr.sort();
//     console.log(sorted_arr);
//     let results = [];
//     for (let i = 0; i < sorted_arr.length ; i++) s{
//         // console.log(sorted_arr.length);
//       if (sorted_arr[i+1] == sorted_arr[i]) {
//         console.log(sorted_arr[i]);
//         results.push([i]);
//       }
//     }
//     console.log(results);
// }
// findDuplicates([9, 9, 3, 2, 3, 4, 4, 5, 7])

// const str = "Hello there".split("");
// let a = str.splice(2,3)
// console.log(str.join( ''));

// const numbers = [175, 50, 25]
// let a  = numbers.reduce((x,y) =>{
//     return x-y;
// })
// console.log(a);

// let original_array = [1, 2, 3, 4, 5, 6];
// let reversed_array = [];
// for(let i = original_array.length-1 ; i >=0; i--){
//     reversed_array.push(original_array[i])
//        console.log(original_array[i]);
// }
// console.log(reversed_array);

// const arr = [1000,2000,3000]
// for(let a=0; a<arr.length; a++){
//     setTimeout(() => {
//        console.log(arr[a]);
//     },a*1000);
// }

// let a = "The Quick Brown Fox"
// var char = ''
// for(let i=0; i<a.length; i++){
//     char = a.charAt(i)
//     if(char === char.toLowerCase()){
//         console.log(char.toUpperCase());
//     }
//     else if(char === char.toUpperCase()){
//         console.log(char.toLowerCase());
//     }
// }


// var array1 = [16,0,2,3,1];
// var array2 = [3,5,6,7,8,13];
// var array3 = [];
// if (array1.length >= array2.length)
//     {
//         array3 = array1.map(function(num, i) {
//           return num + (array2[i] || 0 );
//         });
//     }else{
//         array3 = array2.map(                                                                                                                       (num, i) {
//           return num + (array1[i] || 0);
//         });
//     }
//     console.log(array3);

// function manipulateStudentRecord(obj, operation, prop, newValue){
//   const n = {obj, operation, prop, newValue}
//     n.newValue = "ooo"
//     console.log(n);
// }
// manipulateStudentRecord("km", "kk", "klkl", "mmm")

// const arr = ['16','j0','t2','3','o1']
//     for(let i=0;i<arr.length;i++){
//         const element = arr[i];
//         if (typeof element === 'string' && isNaN(element)) {
//           console.log(element);
//         }
//     }
