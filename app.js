// function addiction(a, b) {
//   var sum = a + b;
//   console.log(sum);
//   return sum;
// }
// addiction(7, 15);

// function codeClass(a, b) {
//   var subtract = a - b;
//   console.log(subtract);
// }
// codeClass(8, 14);

// function avalon(a, b) {
//   var multiply = a * b;
//   console.log(multiply);
// }
// avalon(12, 14);

// function apple(a, b) {
//   var sum = a / b;
//   console.log(sum);
// }
// apple(8, 10);

var I = [1,2,3,4,5,6,7,8,9,10]
function addOne(arg1, arg2){
arg1.push(arg2);
return arg1
}
console.log(addOne(I, 11))




function minusOne(arg1){
 arg1.splice(3,4);
 return arg1 
}
console.log(minusOne(I));


function split(arg1){
 let betOne= arg1.slice(1,3);
 return betOne
}
console.log(split(I))

