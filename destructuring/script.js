// Destructuring Variabel / Assignment

// Destructuring Array
// const perkenalan = ["Halo", "Nama", "Saya", "Dwiky"];
// const [salam, kata1, kata2, nama] = perkenalan;

// // Skipping items
// const [salam, , , nama] = perkenalan;

// console.log(salam);

// Swap Items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// Return value pada function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);

// // Rest Parameter
// const [a, ...values] = [1, 2 , 3, 4, 5];
// console.log(a);
// console.log(values);

// Distructuring Object
// const mhs = {
//   nama: "Dwiky",
//   umur: 20,
// };

// const { nama, umur } = mhs;

// console.log(nama);

// Assignment Object
//  ({ nama, umur} = { nama:"Dwiky", umur: 20 });
//  console.log(nama);

// Assign ke variabel baru
// const mhs = {
//   nama: "Dwiky",
//   umur: 27,
// };

// const { nama: n, umur: u } = mhs;
// console.log(n);

// Memberikan default value
// const mhs = {
//     nama: "Dwiky",
//     umur: 20,
//     email: "dwikysetiawan61@gmail.com",
// }

// const { nama, umur, email = "email@default.com" } = mhs;
// console.log(nama);

// Memberi nilai default + assign ke varabel baru
// const mhs = {
//   nama: "Dwiky",
//   umur: 20,
//   email: "dwikysetiawan61@gmail.com",
// };

// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(n);

// Rest Parameter
// const mhs = {
//     nama: "Dwiky",
//     umur: 20,
//     email: "dwikysetiawan61@gmail.com",
//   };

//   const { nama, ...value } = mhs;
//   console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Dwiky",
  umur: 20,
  email: "dwikysetiawan61@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs));
