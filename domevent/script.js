// const p3 = document.querySelector(".p3");
// function ubahWarna() {
//   // sesuaikan dengan apa yang ingin diubah
//   p3.style.backgroundColor = "lightblue";
// }

// const p2 = document.querySelector(".p2");
// p2.onClick = ubahWarna;

// // Menambahkan Item baru
// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const ul = document.querySelector("section#b ul");
//   const liBaru = document.createElement("li");
//   const textLiBaru = document.createTextNode("Item Baru");
//   liBaru.appendChild(textLiBaru);
//   ul.appendChild(liBaru);
// });

// Perbedaan menggunakan event handler dan event listener
const p3 = document.querySelector(".p3");
// p3.onClick = function () {
//     p3.style.backgroundColor = "lightblue";
// }
// p3.onClick = function () {
//     p3.style.color = "red";
// }

p3.addEventListener("click", function () {
  p3.style.backgroundColor = "lightblue";
});
p3.addEventListener("click", function () {
  p3.style.color = "red";
});
