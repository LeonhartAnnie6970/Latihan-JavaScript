// // Lexical scope
// function init() {
//   // let nama = "Dwiky"; //local variable
//   return function (nama) {
//     // inner function (closure)
//     console.log(nama); // akses ke parent variable
//   };
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama("Dwiky");
// panggilNama("Ana");

// Contoh lain

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
  };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

console.dir(selamatMalam("Dwiky"));
