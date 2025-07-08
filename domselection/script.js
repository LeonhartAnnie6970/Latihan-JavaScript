// DOM Selection
// document.getElementById() -> element
// const judul = document.getElementById("judul");
// judul.style.color = "blue";
// judul.style.backgroundColor = "lightblue";
// judul.innerHTML = "Dwitwicky";

// document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName("p");
// p[0].style.backgroundColor = "lightblue";
// p[1].style.backgroundColor = "lightblue";
// p[2].style.backgroundColor = "lightblue";
// p[3].style.backgroundColor = "lightblue";
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

// document.getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "Ini diubah dari javascript";

// document.querySelector() -> element
// const p4 = document.querySelector("section#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";

// // document.querySelectorAll() -> HTMLCollection
// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// Mengubah Noderoot
// const sectionB = document.querySelector("section#b");
// const p4 = sectionB.getElementsByTagName("p")[0];
// p4.style.backgroundColor = "lightblue";

// DOM Manipulation
// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Dwitwicky</em>";

// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "salmon";

// const judul = document.getElementsByTagName("h1")[0];
// const a = document.querySelector("section#a a");

// element.classList
// element.classList.add();
// element.classList.remove();
// element.classList.toggle();
// element.classList.item();
// element.classList.contains();
// element.classList.replace();

// DOM Manipulation
// buat elemen baru
const pBaru = document.createElement("p");
const tekspBaru = document.createTextNode("Paragraf Baru");
// simpan tulisan ke dalam paragraf
pBaru.appendChild(tekspBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// buat li baru
const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(textLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

// Remove Child
// const link = document.getElementsByTagName("a")[0];
// sectionA.removeChild(link);

// Replace Child
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const textH2Baru = document.createTextNode("Judul Baru!");
h2Baru.appendChild(textH2Baru);

h2Baru.appendChild(textH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
