// Callback
// Synchronous Callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan Nama : ");
//   callback(nama);
// }

// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// Contoh lain
// const mhs = [
//   {
//     nama: "Dwiky",
//     nrp: "211011450448",
//     email: "dwikysetiawan61@gmail",
//   },
//   {
//     nama: "Ana",
//     nrp: "211011450448",
//     email: "dwikysetiawan61@gmail",
//   },
//   {
//     nama: "Rayi",
//     nrp: "211011450448",
//     email: "dwikysetiawan61@gmail",
//   },
// ];

// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });

// console.log("selesai");

// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//       if (xhr.status == 200) {
//         success(xhr.response);
//       } else if (xhr.status == 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("GET", url);
//   xhr.send();
// }

// console.log("mulai");

// getDataMahasiswa(
//   "data/mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log("selesai");

// JQuery
console.log("mulai");
$.ajax({
  url: "data/mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
