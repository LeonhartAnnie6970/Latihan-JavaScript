// Destructuring

// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// Contoh lain
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
//   }

//   const [tambah, kurang, kali, bagi = "tidak ada"] = kalkulasi(2, 3);
//   console.log(bagi);

// Distructuring object
// function kalkulasi(a, b) {
//     return {
//         tambah; a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

//  const {tambah, kurang, kali, bagi = "tidak ada"} = kalkulasi(2, 3);
//  console.log(bagi);

// Destructuring function arguments
const mhs = {
  nama: "Dwiky",
  umur: 20,
  email: "dwikysetiawan61@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 90,
  },
};

// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs.nama}, saya ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs));

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs));
