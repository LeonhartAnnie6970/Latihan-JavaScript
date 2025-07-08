// Execution context, Hoisting, scope

// var nama = "Dwiky";
// console.log(nama);

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase
// console.log(sayHello());

// var nama = "Dwiky";
// var umur = 20;

// function sayHello() {
//   return `Hello, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang di dalamnnya terdapat creation dan execution phase
// window
// arguments

// var nama = "Dwiky";
// var username = "@dikisetiawann_";

// function cetakURL() {
//   var instagramURL = "http://www.instagram.com/";
//   return instagramURL + username;
// }
// console.log(cetakURL("@ana.de.arrmas"));

// contoh lain:
// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }

//   b();
// }
// a();

// contoh lain:
function satu() {
  var nama = "Dwiky";
  console.log(nama);
}
function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "Ana";
satu();
dua("Maharani");
console.log(nama);
