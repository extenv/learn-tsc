"use strict";
// Language: typescript
// Path: src/app.ts
let myname = 'Ivan Maulana';
//console.log(myname); //Ivan Maulana
function basicFunc(name) {
    return `name: ${name}`;
}
//console.log(basicFunc('Ivan Maulana')); //name: Ivan Maulana
function opsiFunc(name) {
    return `name: ${name}`;
}
//console.log(opsiFunc()); //name: undefined
function customFunc(name = "Wajib diisi !!!") {
    return `name: ${name}`;
}
function myBio(fill) {
    console.log(`${fill.nama}, ${fill.tinggi}`);
}
const mybio = { nama: "Ivan Maulana", tinggi: 170 };
//myBio(mybio); //Ivan Maulana, 170
class VirtualBio {
    constructor(nama, tinggi) {
        this.nama = nama;
        this.tinggi = tinggi;
    }
}
const newBio = new VirtualBio("Extenv", 170);
//myBio(newBio); //Ivan Maulana, 170
function cetak(mencetak) {
    console.log(mencetak);
}
let array = [1, 2, 3, 4, 5];
for (let get in array) {
    cetak(get);
}
