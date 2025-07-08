// function declaration
// function tampilPesan (nama) {
//     alert("Halo " + nama);
// }

// tampilPesan("Dwiky");

// // function expression
// let tampilPesan2 = function (nama) {
//     alert("Halo " + nama);
// }
// tampilPesan2("Dwiky");

// Arrow Function adalah bentuk lain yang lebih ringkas dari Function Expression
// const tampilPesan3 = nama => {
//   return `Halo, ${nama}`;
// };
// console.log("Dwiky");

// implisit return
// const tampilPesan3 = nama => `Halo, ${nama}`;
// console.log(tampilPesan3("Dwiky"));

// Kalau parameter nya 2 harus menggunakan tanda kurung
// const tampilPesan4 = (nama, waktu) => {
//   return `Halo, ${nama}, selamat ${waktu}`;
// }
// console.log(tampilPesan4("Dwiky", "pagi"));

// jika tidak ada parameter
// const tampilPesan5 = () => `Hello World!`;
//     console.log(tampilNama());

// contoh lain
// let mahasiswa = ["Dwiky", "Ana", "Dwi"];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let mahasiswa = mahasiswa.map((nama) => nama.length);
// console.log(mahasiswa);

// kalo berubah menjadi objek
// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jmlHuruf: nama.length,
// }));
// console.table(jumlahHuruf);

// Konsep this pada arrow function
// Constructor Function
// const Mahasiswa = function () {
//   this.nama = "Dwiky";
//   this.umur = 26;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, saya ${this.umur} tahun.`);
//   };
// };

// const Dwiky = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () {
//   this.nama = "Dwiky";
//   this.umur = 26;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, saya ${this.umur} tahun.`);
//   };
// };

// const Dwiky = new Mahasiswa();

// Object Literal
// const mhs1 = {
//   nama: "Dwiky",
//   umur: 26,
//   sayHello: function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   }
// setInterval(() => {
//   console.log(this.umur++);
// }, 500);
// };

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle("size");
  setTimeout(() => {
    this.classList.toggle("caption");
  }, 600);
});
