//manipulasi array

//1. Menambah isi array

// var arr = ["a", 1, true];
// console.log(arr[1]);

// var arr = [];
// a[0] = "Dwiky";
// b[1] = "Dwi";
// c[2] = "Putra";

// console.log(arr);


//2. Menghapus isi array
// var arr = ["Dwiky","Dwi","Putra"];
// arr[1] = undefined;

// console.log(arr);


//3. Menampilkan isi array
// var arr = ["Dwiky","Dwi","Putra"];

// for (var i = 0; i < arr.length; i++) {
//     console.log("Mahasiswa ke -" + (i + 1) + " : " + arr[i]);
// }


//Method pada array
//1. join
// var arr = ["Dwiky","Dwi","Putra"];
// console.log(arr.join(" , "));


//2. push & pop
// var arr = ["Dwiky","Dwi","Putra"];
// arr.push("Cahyadi"); dapat ditambah berkali2
// arr.pop();
// arr.pop();
// console.log(arr.join(" , "));


//3. shift & unshift
// var arr = ["Dwiky","Dwi","Putra"];
// arr.shift();
// arr.unshift("Cahyadi");
// console.log(arr.join(" , "));


//4.splice
// var arr = ["Dwiky","Dwi","Putra"];
//splice(indexAwal, jumlahHapus, elemenBaru1, elemenBaru2, elemenBaru3, ...)
// arr.splice(2, 0, "Cahyadi");
// console.log(arr.join(" - "));


//5. slice
// slice(indexAwal, indexAkhir)
// var arr = ["Dwiky","Dwi","Putra","Cahyadi","Ana"];
// var arr2 = arr.slice(1, 4);
// console.log(arr2.join(" - "));


//6. forEach
// var arr = [1,2,3,4,5,6,7,8];
// arr.forEach(function(e) {
//     console.log(e);
// });


//7. map
// var angka = [3,4,5,1,2,6,8,7];
// var angka2 = angka.map(function(e) {

//     return e * 2;
// });
// console.log(angka2.join(" - "));


//8. sort
// var angka = [3,4,5,1,2,6,8,7];
// console.log(angka.join(" - "));
// angka.sort();
// console.log(angka.join(" - "));


//9. filter
// var angka = [3,4,5,1,2,6,8,7];
// var angka2 = angka.filter(function(e) {
//     return e > 5;
// });
// console.log(angka2.join(" - "));


//10. find
// var angka = [3,4,5,1,2,6,8,7];
// var angka2 = angka.find(function(e) {
//     return e > 5;
// });
// console.log(angka2);