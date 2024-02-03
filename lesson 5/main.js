// N 1

// function power(a,n){
// return (a**n)
// }
// console.log(power(10,5));

// N 2

// function mean(a,b){
//    return ((a+b)/2)
// }
// console.log(mean(10,8));

// // O'rta arifmetik

// function mean(a,b){
//    return ((a*b)**1/2)
// }
// console.log(mean(10,8));

// N 3

// function sigin (n){
//    if(n>0){
//       console.log(1);
//    }else{
//       console.log(-1);
//    }
// }
// console.log(sigin(5));


// N 4

// function sign(n){
//    if (n>0){
//       console.log(1);
//    }
//    if (n<0){
//       console.log(-1);
//    }
//    if (n==0){
//       console.log(0);
//    }
// }
// console.log(sign(10));

// function numberOfroots(a,b,c){
// let d=b**2-4*a*c
// if (d>0){
//    console.log("2 ta ildiz ega");
// }
// if (d==0){
//    console.log("1 ta ildiz ega");
// }
// if (d<0){
//    console.log("ildiz ega emas ");
// }
// }
// console.log(numberOfroots(1,-5,4));

// N 5

// function areaCricle(R){
//    s=Math.PI*R**2
//    return s
// }
// console.log(areaCricle(10));

// N 6
// let s=0
// function sumRange(a,b){
//    for(a=2;i<b;i++){
//       s+=i
//    }
//    return s
// }
// console.log(sumRange(2,15));
// console.log(s);

// N 7

// function calc(a,b){
// let son=prompt("amalni kriting")

// if (son=="+"){
// console.log(a+b);
// }

// if (son=="-"){
// console.log(a-b);
// }

// if (son=="*"){
// console.log(a*b);
// }

// if (son=="/"){
// console.log(a/b);
// }
// }

// console.log(calc(10,25));

// N 8

// function isEVEN(K){
//    if (K%2==0){
//       console.log(true);
//    }else{
//       console.log(false);
//    }
// }
// console.log(isEVEN(99));

// N 9

// function sortABC(a,b,c){
// console.log(Math.max(a,b,c));
// console.log(Math.min(a,b,c));
// console.log(a+b+c-Math.max-Math.min);
// }
// console.log(sortABC(1,25,89));

// N 15

// function isPalindrom(num) {
//    var numStr = num.toString();
//    for (var i = 0; i < numStr.length / 2; i++) {
//      if (numStr[i] !== numStr[numStr.length - 1 - i]) {
//        return false;
//      }
//    }
 
//    return true;
//  }
//  var testNum = 1221;
//  var result = isPalindrom(testNum);
//  console.log(result);
 


// N 16

// function factorial(n) {
//    let fact = 1;
//    for (let i = 2; i <= n; i++) {
//       fact *= i;
//    }
//    return fact;
//  }
 
//  console.log(factorial(12)); 
 
// N 18
// function sumoddeven (n){
// return n * (n + 1) / 2;
// }


// console.log(sumoddeven(10));

// N 17

// s=0
// function getSum(n){
//    for (let i=2; i<=n;i++){
//       if (i%3==0){
//          s+=i
//          console.log(i);
//       }else{
//          console.log("3 ga bo'linadi");
//       }
//    }
// }
// console.log(getSum(100));

// N 22

// function isLeapYear(year) {
//    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//      return true;
//    } else {
//      return false;
//    }
//  }
//  var testYear = 2024;
//  var result = isLeapYear(testYear);
//  console.log(result);
 

